#!/usr/bin/env node
// Checks and previews animations without Claude Code: runs anims/*.js against src/core.js and
// src/sprite.js in a sandbox.
//
//   node tools/sim.js check <file.js ...|all>     errors and warnings per file; exit 1 on errors
//   node tools/sim.js preview <file.js> [options] the frames of one run as text
//
// preview options:
//   --W 80          stage width in columns       --x 0          Clawd's column when it starts
//   --seed 1        Math.random seed             --every 1      show every Nth frame
//   --from 0        first frame                  --to 1e9       last frame
//   --all           keep identical neighbours    --ansi         colour the output
const fs = require('fs')
const path = require('path')
const vm = require('vm')

const ROOT = path.join(__dirname, '..')
const ENGINE = ['src/core.js', 'src/sprite.js'].map((f) => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n')
const MAX_BYTES = 5000
const SOFT_BYTES = 4500
const FRAME_KEYS = new Set(['pose', 'x', 'offset', 'color', 'paint', 'hide', 'poof', 'shadow', 'ms', 'props', 'actors'])
const PROP_KEYS = new Set(['x', 'y', 't', 'c', 'bg', 'b', 'z', 'o'])
const ACTOR_KEYS = new Set(['x', 'offset', 'pose', 'color', 'paint', 'hide', 'front'])
const FORBIDDEN = /\b(require|process|import|eval|Function|globalThis|window|setTimeout|setInterval|Bun|Date|\$cdL|\$cdNext|\$cdPick|\$cdPlay|\$cdRun)\b/

// --- sandbox -----------------------------------------------------------------

function rng(seed) {
  let s = seed >>> 0 || 1
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

function load(file, seed) {
  const src = fs.readFileSync(file, 'utf8')
  const ctx = vm.createContext({ __rng: rng(seed), __errs: [], console: { log() {}, error() {} } })
  vm.runInContext('Math.random = __rng', ctx)
  vm.runInContext(ENGINE, ctx, { filename: 'engine' })
  const wrapped = `'use strict';(function () { try {\n${src}\n} catch (e) { __errs.push(String((e && e.stack) || e)) } })()`
  vm.runInContext(wrapped, ctx, { filename: file, timeout: 1000 })
  return ctx
}

function run(file, W, x, seed) {
  const ctx = load(file, seed)
  Object.assign(ctx, { __W: W, __x: x })
  const t0 = process.hrtime.bigint()
  const res = vm.runInContext(`(function () {
    var a = $cdL[0]
    if (!a) return { err: 'no $cdA registration' }
    try { return { frames: a.fn($cdCtx({ x: __x }, __W)) } } catch (e) { return { err: String((e && e.stack) || e) } }
  })()`, ctx, { timeout: 2000 })
  res.ms = Number(process.hrtime.bigint() - t0) / 1e6
  res.reg = vm.runInContext('$cdL.map(function (a) { return { id: a.id, meta: a.meta } })', ctx)
  res.loadErrs = ctx.__errs
  res.ctx = ctx
  return res
}

// Top-level vars of the sandboxed engine are properties of its context object.
const validColor = (ctx, c) => ctx.$cdCol(c) !== undefined

// A glyph Claude Code draws one column wide: printable, below the CJK blocks, no emoji, no
// combining or format characters, no line separators.
function badChar(ch) {
  const cp = ch.codePointAt(0)
  if (cp < 0x20 || (cp > 0x7e && cp < 0xa0) || cp > 0x2e7f || cp === 0x2028 || cp === 0x2029) return true
  return /\p{Emoji_Presentation}|\p{M}|\p{Cf}/u.test(ch)
}

function poseOk(ctx, p) {
  const S = ctx.$cdSprite
  if (typeof p === 'string') return p in S.poses
  if (p && typeof p === 'object') {
    if ('facing' in p) return p.facing in S.facing && Object.keys(p).length === 1
    return p.eyes in S.eyes && p.arms in S.arms && p.feet in S.feet
  }
  return false
}

// --- check -------------------------------------------------------------------

function check(file) {
  const errs = []
  const warns = []
  const id = path.basename(file, '.js')
  const src = fs.readFileSync(file, 'utf8')
  const bytes = Buffer.byteLength(src)
  if (bytes > MAX_BYTES) errs.push(`file is ${bytes} bytes (max ${MAX_BYTES})`)
  else if (bytes > SOFT_BYTES) warns.push(`file is ${bytes} bytes (aim for <= ${SOFT_BYTES})`)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) errs.push('file name must be <kebab-case id>.js')
  const code = src.replace(/\/\/[^\n]*/g, '')
  if (!/^\s*\$cdA\(\s*["']/.test(code)) errs.push('file must start with $cdA("<id>", ...) (comments allowed above)')
  const forbidden = code.match(FORBIDDEN)
  if (forbidden) errs.push(`forbidden identifier: ${forbidden[0]}`)

  let first
  try {
    first = run(file, 80, 10, 1)
  } catch (e) {
    errs.push(`load failed: ${e.message}`)
    return { id, errs, warns }
  }
  if (first.loadErrs.length) errs.push(`throws while registering: ${first.loadErrs[0]}`)
  if (first.reg.length !== 1) errs.push(`must register exactly one animation (got ${first.reg.length})`)
  const meta = first.reg[0]?.meta || {}
  if (first.reg[0] && first.reg[0].id !== id) errs.push(`registered id "${first.reg[0].id}" != file name "${id}"`)
  const minW = meta.w === undefined ? 40 : meta.w
  if (typeof minW !== 'number' || minW < 30 || minW > 160) errs.push('meta.w must be a number in 30..160')
  if (typeof meta.title !== 'string' || !meta.title) warns.push('meta.title missing')

  const stats = { frames: [], secs: [], maxProps: 0, maxMs: 0 }
  const seen = new Set()
  const once = (list, msg) => {
    if (!seen.has(msg)) {
      seen.add(msg)
      list.push(msg)
    }
  }
  for (const W of [Math.max(30, Math.min(160, minW | 0)), 80, 120, 200]) {
    const mx = W - 9
    for (const x of [0, Math.floor(mx / 2), mx]) {
      for (const seed of [1, 2, 3]) {
        const r = run(file, W, x, seed)
        stats.maxMs = Math.max(stats.maxMs, r.ms)
        const tag = `(W=${W} x=${x} seed=${seed})`
        if (r.err) {
          once(errs, `throws ${tag}: ${r.err.split('\n')[0]}`)
          continue
        }
        const f = r.frames
        if (!Array.isArray(f)) {
          once(errs, `must return an array of frames ${tag}`)
          continue
        }
        if (f.length < 10 || f.length > 4000) once(errs, `frame count ${f.length} outside 10..4000 ${tag}`)
        if (r.ms > 40) once(warns, `slow: building frames took ${r.ms.toFixed(1)}ms ${tag}`)
        let total = 0
        let px = x
        f.forEach((fr, i) => {
          const at = `frame ${i} ${tag}`
          if (!fr || typeof fr !== 'object' || Array.isArray(fr)) return once(errs, `${at}: not an object`)
          for (const k of Object.keys(fr)) if (!FRAME_KEYS.has(k)) once(errs, `unknown frame key "${k}"`)
          if (fr.pose !== undefined && !poseOk(r.ctx, fr.pose)) once(errs, `${at}: invalid pose ${JSON.stringify(fr.pose)}`)
          if (fr.x !== undefined) {
            if (!Number.isInteger(fr.x)) once(errs, `${at}: x must be an integer (${fr.x})`)
            else {
              if (fr.x < -9 || fr.x > W) once(errs, `${at}: x=${fr.x} outside -9..W`)
              if (Math.abs(fr.x - px) > 2 && !fr.hide && !f[i - 1]?.hide) once(warns, `Clawd jumps ${fr.x - px} columns at ${at} (hide him, or move at most 2 per frame)`)
              px = fr.x
            }
          }
          if (fr.offset !== undefined && (!Number.isInteger(fr.offset) || fr.offset < -7 || fr.offset > 3)) once(errs, `${at}: offset must be an integer in -7..3`)
          if (fr.ms !== undefined && (typeof fr.ms !== 'number' || fr.ms < 20 || fr.ms > 3000)) once(errs, `${at}: ms must be 20..3000`)
          total += fr.ms === undefined ? 60 : fr.ms
          if (fr.color !== undefined && !validColor(r.ctx, fr.color)) once(errs, `${at}: invalid color ${JSON.stringify(fr.color)}`)
          if (fr.paint !== undefined && typeof fr.paint !== 'function') once(errs, `${at}: paint must be a function (col, row) => color`)
          if (typeof fr.paint === 'function') {
            for (const [cx, cy] of [[0, 0], [4, 1], [8, 2]]) {
              let v
              try { v = fr.paint(cx, cy) } catch (e) { once(errs, `${at}: paint throws ${e.message}`) }
              if (v !== undefined && !validColor(r.ctx, v)) once(errs, `${at}: paint returned invalid color ${JSON.stringify(v)}`)
            }
          }
          if (fr.props !== undefined) {
            if (!Array.isArray(fr.props)) once(errs, `${at}: props must be an array`)
            else {
              stats.maxProps = Math.max(stats.maxProps, fr.props.length)
              if (fr.props.length > 120) once(warns, `${at}: ${fr.props.length} props (keep under 120)`)
              for (const p of fr.props) {
                if (!p || typeof p !== 'object') {
                  once(errs, `${at}: prop must be an object`)
                  continue
                }
                for (const k of Object.keys(p)) if (!PROP_KEYS.has(k)) once(errs, `unknown prop key "${k}"`)
                if (!Number.isInteger(p.x) || !Number.isInteger(p.y)) once(errs, `${at}: prop x/y must be integers (${p.x},${p.y})`)
                if (typeof p.t !== 'string' || !p.t.length) once(errs, `${at}: prop t must be a non-empty string`)
                else for (const ch of p.t) if (badChar(ch)) once(errs, `character U+${ch.codePointAt(0).toString(16)} is not single-width safe`)
                if (p.c !== undefined && !validColor(r.ctx, p.c)) once(errs, `${at}: invalid prop color ${JSON.stringify(p.c)}`)
                if (p.bg !== undefined && !validColor(r.ctx, p.bg)) once(errs, `${at}: invalid prop bg ${JSON.stringify(p.bg)}`)
              }
            }
          }
          if (fr.actors !== undefined) {
            if (!Array.isArray(fr.actors)) once(errs, `${at}: actors must be an array`)
            else {
              for (const a of fr.actors) {
                if (!a || typeof a !== 'object') {
                  once(errs, `${at}: actor must be an object`)
                  continue
                }
                for (const k of Object.keys(a)) if (!ACTOR_KEYS.has(k)) once(errs, `unknown actor key "${k}"`)
                if (!Number.isInteger(a.x)) once(errs, `${at}: actor x must be an integer`)
                if (a.pose !== undefined && !poseOk(r.ctx, a.pose)) once(errs, `${at}: invalid actor pose ${JSON.stringify(a.pose)}`)
                if (a.offset !== undefined && (!Number.isInteger(a.offset) || a.offset < -7 || a.offset > 3)) once(errs, `${at}: actor offset must be an integer in -7..3`)
                if (a.color !== undefined && !validColor(r.ctx, a.color)) once(errs, `${at}: invalid actor color ${JSON.stringify(a.color)}`)
                if (a.paint !== undefined && typeof a.paint !== 'function') once(errs, `${at}: actor paint must be a function`)
              }
            }
          }
        })
        const last = f[f.length - 1] || {}
        let lx = x
        for (const fr of f) if (fr && Number.isInteger(fr.x)) lx = fr.x
        if (last.hide || (last.offset || 0) !== 0) once(errs, `last frame must show Clawd on the ground (no hide, offset 0) ${tag}`)
        if (lx < 0 || lx > mx) once(errs, `Clawd must end on stage (x in 0..W-9), ended at ${lx} ${tag}`)
        if ((last.props || []).length || (last.actors || []).length) once(warns, `last frame still has props or actors ${tag}`)
        stats.frames.push(f.length)
        stats.secs.push(total / 1000)
        if (total < 2500 || total > 40000) once(errs, `duration ${(total / 1000).toFixed(1)}s outside 2.5..40s ${tag}`)
        else if (total > 25000) once(warns, `long: ${(total / 1000).toFixed(1)}s ${tag}`)
      }
    }
  }
  const range = (a) => (a.length ? `${Math.min(...a)}..${Math.max(...a)}` : '-')
  const secs = range(stats.secs.map((s) => +s.toFixed(1)))
  return { id, errs, warns, info: `${bytes} B, ${range(stats.frames)} frames, ${secs} s, max ${stats.maxProps} props, built in ${stats.maxMs.toFixed(1)} ms` }
}

// --- preview -----------------------------------------------------------------

function render(ctx, frame, x, W, ansi) {
  const { $cdH: H, $cdG: G, $cdSprite: S, $cdPalette: pal } = ctx
  const grid = Array.from({ length: H }, () => Array.from({ length: W }, () => ({ ch: ' ', c: undefined })))
  const put = (cx, cy, ch, c) => {
    if (cx >= 0 && cx < W && cy >= 0 && cy < H) grid[cy][cx] = { ch, c }
  }
  const text = (p) => {
    for (const u of ctx.$cdRuns(p, W, H)) Array.from(u.t).forEach((ch, i) => put(u.x + i, u.y, ch, u.c))
  }
  const sprite = (a) => {
    if (!a || a.hide) return
    const pose = ctx.$cdPose(a.pose)
    const ox = a.x
    const oy = G + (a.offset || 0)
    const color = (col, row) => {
      if (typeof a.paint === 'function') {
        try { return a.paint(col, row) || a.color || 'clawd_body' } catch {}
      }
      return a.color || 'clawd_body'
    }
    const seg = (s, col, row) => Array.from(s).forEach((ch, i) => put(ox + col + i, oy + row, ch, color(col + i, row)))
    if (typeof pose === 'object' && pose.facing) {
      S.facing[pose.facing].forEach((r, row) => seg(r.glyphs, 0, row))
      return
    }
    const p = typeof pose === 'string' ? S.poses[pose] : pose
    const arms = S.arms[p.arms]
    seg(arms.r1L, 0, 0)
    seg(S.eyes[p.eyes].map((e) => e.glyphs).join(''), 2, 0)
    seg(arms.r1R, 8, 0)
    seg(arms.r2L, 0, 1)
    seg('█'.repeat(5), 2, 1)
    seg(arms.r2R, 7, 1)
    seg(S.feet[p.feet], 0, 2)
  }
  const props = Array.isArray(frame.props) ? frame.props : []
  const actors = Array.isArray(frame.actors) ? frame.actors : []
  props.filter((p) => p && +p.z < 0).forEach(text)
  actors.filter((a) => a && !a.front).forEach(sprite)
  sprite({ x, offset: frame.offset, pose: frame.pose, color: frame.color, paint: frame.paint, hide: frame.hide })
  if (!frame.hide && frame.poof && (frame.offset || 0) > 0) {
    const g = frame.poof === 'dot' ? '·' : '~'
    put(x, H - 1, g, 'inactive')
    put(x + 8, H - 1, g, 'inactive')
  }
  actors.filter((a) => a && a.front).forEach(sprite)
  props.filter((p) => p && !(+p.z < 0)).forEach(text)
  const tint = (c) => {
    const s = c === undefined ? undefined : ctx.$cdCol(c)
    const m = s && /^rgb\((\d+),(\d+),(\d+)\)$/.exec(s)
    const v = m ? (+m[1] << 16) | (+m[2] << 8) | +m[3] : s ? pal[s] : undefined
    return v === undefined ? '' : `\x1b[38;2;${v >> 16};${(v >> 8) & 255};${v & 255}m`
  }
  return grid.map((row) => row.map((cell) => (ansi && cell.ch !== ' ' ? tint(cell.c) + cell.ch + '\x1b[0m' : cell.ch)).join(''))
}

function preview(file, opts) {
  const W = +opts.W || 80
  const seed = +opts.seed || 1
  const x0 = opts.x === undefined ? 0 : +opts.x
  const r = run(file, W, x0, seed)
  if (r.err) {
    console.log('error:', r.err)
    process.exit(1)
  }
  const from = +opts.from || 0
  const to = opts.to === undefined ? Infinity : +opts.to
  const every = +opts.every || 1
  const edge = '+' + '-'.repeat(W) + '+'
  let x = x0
  let t = 0
  let prev = null
  let same = 0
  const flush = () => {
    if (same) console.log(`   (same for ${same} more frame${same > 1 ? 's' : ''})`)
    same = 0
  }
  console.log(`${path.basename(file)}: ${r.frames.length} frames, W=${W}, x=${x0}, seed=${seed}`)
  r.frames.forEach((fr, i) => {
    if (Number.isInteger(fr.x)) x = fr.x
    const ms = fr.ms === undefined ? 60 : fr.ms
    if (i >= from && i <= to && (i - from) % every === 0) {
      const lines = render(r.ctx, fr, x, W, opts.ansi)
      const key = lines.join('\n')
      if (!opts.all && key === prev) same++
      else {
        flush()
        const extra = [fr.offset ? `offset=${fr.offset}` : '', fr.hide ? 'hidden' : ''].filter(Boolean).join(' ')
        console.log(`#${i} t=${(t / 1000).toFixed(2)}s ${ms}ms x=${x} ${extra}`.trimEnd())
        console.log(edge)
        for (const l of lines) console.log('|' + l + '|')
        console.log(edge)
        prev = key
      }
    }
    t += ms
  })
  flush()
  console.log(`total ${(t / 1000).toFixed(2)}s`)
}

// --- cli -----------------------------------------------------------------------

const [cmd, ...rest] = process.argv.slice(2)
const opts = {}
const files = []
for (let i = 0; i < rest.length; i++) {
  if (!rest[i].startsWith('--')) files.push(rest[i])
  else if (['ansi', 'all'].includes(rest[i].slice(2))) opts[rest[i].slice(2)] = true
  else opts[rest[i].slice(2)] = rest[++i]
}

if (cmd === 'check' && files.length) {
  const list = files.length === 1 && files[0] === 'all'
    ? fs.readdirSync(path.join(ROOT, 'anims')).filter((f) => f.endsWith('.js')).sort().map((f) => path.join(ROOT, 'anims', f))
    : files
  let bad = 0
  for (const file of list) {
    const r = check(file)
    if (r.errs.length) bad++
    console.log(`${r.errs.length ? 'FAIL' : 'ok  '} ${r.id}  ${r.info || ''}`)
    for (const e of r.errs) console.log('   error: ' + e)
    for (const w of r.warns) console.log('   warn:  ' + w)
  }
  if (list.length > 1) console.log(`${list.length - bad}/${list.length} pass`)
  process.exit(bad ? 1 : 0)
} else if (cmd === 'preview' && files.length === 1) {
  preview(files[0], opts)
} else {
  console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 13).map((l) => l.replace(/^\/\/ ?/, '')).join('\n'))
  process.exit(2)
}
