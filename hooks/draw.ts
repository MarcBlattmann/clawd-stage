// Turns one stage frame into Raster cells, layered back to front: back props, back actors,
// Clawd and his effects, front actors, front props.
import { $cdCol, $cdG, $cdH, $cdInt, $cdPalette, $cdPose, $cdRuns, $cdSprite } from './engine.js'
import type { CdActor, CdFrame } from './engine.js'

const DEFAULT = 0x01000000
const BLACK = 0x000000
const BODY = $cdPalette.clawd_body ?? 0xd77757
const DIM = $cdPalette.inactive ?? 0x999999
const TEXT = $cdPalette.text ?? 0xffffff
const STAR = 0x2a
const ARMS_DOWN = { r1L: ' ▐', r1R: '', r2L: '▝▜', r2R: '█▀' }

// Code points the surface refused once (learned from a blit's deny), drawn as `*` from then on.
export const refused = new Set<number>()
const WIDE = /\p{Emoji_Presentation}|\p{M}|\p{Cf}/u

function glyph(ch: string): number {
  const cp = ch.codePointAt(0) ?? 0x20
  if (cp < 0x20 || (cp >= 0x7f && cp < 0xa0)) return 0x20
  if (cp > 0xffff || refused.has(cp) || WIDE.test(ch)) return STAR
  return cp
}

function color(c: unknown, fallback: number): number {
  const s = $cdCol(c)
  if (s === undefined) return fallback
  const named = $cdPalette[s]
  if (named !== undefined) return named
  const m = /^rgb\((\d+),(\d+),(\d+)\)$/.exec(s)
  return m ? (Number(m[1]) << 16) | (Number(m[2]) << 8) | Number(m[3]) : fallback
}

export function compose(fr: CdFrame, W: number): Uint32Array {
  const H = $cdH
  const cells = new Uint32Array(W * H * 3)
  for (let i = 0; i < W * H; i++) {
    cells[i * 3] = 0x20
    cells[i * 3 + 1] = DEFAULT
    cells[i * 3 + 2] = DEFAULT
  }
  const put = (x: number, y: number, ch: string, fg: number, bg: number) => {
    if (x < 0 || x >= W || y < 0 || y >= H) return
    const k = (y * W + x) * 3
    cells[k] = glyph(ch)
    cells[k + 1] = fg
    cells[k + 2] = bg
  }
  const props = (front: boolean) => {
    for (const p of fr.props ?? []) {
      if (!p || typeof p !== 'object' || (Number((p as { z?: unknown }).z) < 0) === front) continue
      for (const run of $cdRuns(p, W, H)) {
        const fg = color(run.c, TEXT)
        const bg = color(run.bg, DEFAULT)
        Array.from(run.t).forEach((ch, i) => put(run.x + i, run.y, ch, fg, bg))
      }
    }
  }
  const sprite = (a: CdActor) => {
    if (a.hide) return
    const ox = $cdInt(a.x, 0)
    const oy = $cdG + $cdInt(a.offset, 0)
    const base = color(a.color, BODY)
    const pose = $cdPose(a.pose)
    if (typeof pose === 'object' && 'facing' in pose) {
      ($cdSprite.facing[pose.facing] ?? []).forEach((row, r) =>
        Array.from(row.glyphs).forEach((ch, c) => put(ox + c, oy + r, ch, base, c >= row.from && c < row.to ? BLACK : DEFAULT)))
      return
    }
    const p = typeof pose === 'string' ? $cdSprite.poses[pose] : pose
    if (!p) return
    const paint = typeof a.paint === 'function' ? a.paint : undefined
    const at = (c: number, r: number) => {
      if (!paint) return base
      try { return color(paint(c, r), base) } catch { return base }
    }
    // Stock rule: a space takes the colour before it; eyes sit on black, a closed lid inverts.
    const seg = (glyphs: string, col: number, row: number, on?: 'eyes' | 'lid') => {
      let prev: number | undefined
      Array.from(glyphs).forEach((ch, i) => {
        const fg = ch === ' ' && prev !== undefined ? prev : at(col + i, row)
        prev = fg
        if (on === 'lid') put(ox + col + i, oy + row, ch, BLACK, fg)
        else put(ox + col + i, oy + row, ch, fg, on === 'eyes' ? BLACK : DEFAULT)
      })
    }
    const arms = $cdSprite.arms[p.arms] ?? $cdSprite.arms.down ?? ARMS_DOWN
    seg(arms.r1L, 0, 0)
    let col = 2
    for (const span of $cdSprite.eyes[p.eyes] ?? $cdSprite.eyes.open ?? []) {
      seg(span.glyphs, col, 0, span.lid ? 'lid' : 'eyes')
      col += Array.from(span.glyphs).length
    }
    seg(arms.r1R, 8, 0)
    seg(arms.r2L, 0, 1)
    seg('█████', 2, 1, 'eyes')
    seg(arms.r2R, 7, 1)
    seg($cdSprite.feet[p.feet] ?? $cdSprite.feet.both ?? '', 0, 2)
  }

  props(false)
  for (const a of fr.actors ?? []) if (a && typeof a === 'object' && !a.front) sprite(a)
  if (!fr.hide) {
    const x = $cdInt(fr.x, 0)
    const o = $cdInt(fr.offset, 0)
    sprite({ x, offset: o, pose: fr.pose, color: fr.color, paint: fr.paint })
    const poof = fr.poof === 'dot' ? '·' : fr.poof === 'wave' ? '~' : undefined
    if (poof && o > 0) [x, x + 8].forEach((px) => put(px, H - 1, poof, DIM, DEFAULT))
    const shadow = fr.shadow === 'wide' ? { g: '▁▁▁', l: 3 } : fr.shadow === 'narrow' ? { g: '▁', l: 4 } : undefined
    if (shadow) Array.from(shadow.g).forEach((ch, i) => put(x + shadow.l + i, H - 1, ch, DIM, DEFAULT))
  }
  for (const a of fr.actors ?? []) if (a && typeof a === 'object' && a.front) sprite(a)
  props(true)
  return cells
}

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

export function encode(cells: Uint32Array): string {
  const bytes = new Uint8Array(cells.length * 4)
  const view = new DataView(bytes.buffer)
  cells.forEach((v, i) => view.setUint32(i * 4, v >>> 0, true))
  let out = ''
  for (let i = 0; i < bytes.length; i += 3) {
    const a = bytes[i] ?? 0, b = bytes[i + 1], c = bytes[i + 2]
    const n = (a << 16) | ((b ?? 0) << 8) | (c ?? 0)
    out += B64.charAt((n >> 18) & 63) + B64.charAt((n >> 12) & 63) + (b === undefined ? '=' : B64.charAt((n >> 6) & 63)) + (c === undefined ? '=' : B64.charAt(n & 63))
  }
  return out
}
