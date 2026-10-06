// The stage engine: the animation registry, frame sanitizers, the helpers animations are written
// with, and the scheduler that picks what Clawd does next. Plain script-style JS: tools/build.js
// concatenates it with src/sprite.js and anims/*.js into hooks/engine.js, and tools/sim.js runs
// the same files in a sandbox.

// Stage geometry: Clawd is 9x3, the stage 7 rows, his feet on the bottom row.
var $cdSW = 9, $cdSH = 3, $cdH = 7, $cdG = $cdH - $cdSH

// Every animation file calls $cdA(id, meta, fn) once.
var $cdL = []
function $cdA(id, meta, fn) {
  if (typeof fn === 'function') $cdL.push({ id: String(id), meta: meta || {}, fn: fn })
}

var $cdV = {
  eyes: { open: 1, left: 1, right: 1, closed: 1, wink: 1 },
  arms: { down: 1, up: 1, 'one-up': 1 },
  feet: { both: 1, left: 1, right: 1 },
  named: { default: 1, 'arms-up': 1, 'look-left': 1, 'look-right': 1 },
  facing: {
    'right-12': 1, 'right-30': 1, 'right-55': 1, 'right-75': 1, edge: 1, 'back-105': 1, 'back-125': 1,
    'back-150': 1, back: 1, 'left-75': 1, 'left-55': 1, 'left-30': 1, 'left-12': 1,
  },
}

// Unknown poses become "default", so a typo in an animation never breaks the drawing.
function $cdPose(p) {
  if (typeof p === 'string') return $cdV.named[p] ? p : 'default'
  if (p && typeof p === 'object') {
    if (p.facing !== void 0) return $cdV.facing[p.facing] ? { facing: p.facing } : 'default'
    return {
      eyes: $cdV.eyes[p.eyes] ? p.eyes : 'open',
      arms: $cdV.arms[p.arms] ? p.arms : 'down',
      feet: $cdV.feet[p.feet] ? p.feet : 'both',
    }
  }
  return 'default'
}

// Theme colour names an animation may use (resolved through $cdPalette).
var $cdTK = {}
;('clawd_body clawd_background claude claudeShimmer permission permissionShimmer suggestion success error ' +
  'warning warningShimmer inactive inactiveShimmer subtle text inverseText remember background autoAccept ' +
  'bashBorder planMode ide fastMode fastModeShimmer effortUltra professionalBlue chromeYellow merged ' +
  'diffAdded diffRemoved diffAddedWord diffRemovedWord rainbow_red rainbow_orange rainbow_yellow ' +
  'rainbow_green rainbow_blue rainbow_indigo rainbow_violet rainbow_red_shimmer rainbow_orange_shimmer ' +
  'rainbow_yellow_shimmer rainbow_green_shimmer rainbow_blue_shimmer rainbow_indigo_shimmer rainbow_violet_shimmer')
  .split(' ')
  .forEach(function (k) { $cdTK[k] = 1 })

// A theme name, "rgb(r,g,b)" or "#rrggbb" -> a theme name or "rgb(r,g,b)"; anything else -> undefined.
function $cdCol(c) {
  if (typeof c !== 'string') return void 0
  if ($cdTK[c]) return c
  var m = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.exec(c.replace(/\s+/g, ''))
  if (m) return 'rgb(' + Math.min(255, +m[1]) + ',' + Math.min(255, +m[2]) + ',' + Math.min(255, +m[3]) + ')'
  m = /^#([0-9a-fA-F]{6})$/.exec(c)
  if (m) {
    var v = parseInt(m[1], 16)
    return 'rgb(' + (v >> 16) + ',' + ((v >> 8) & 255) + ',' + (v & 255) + ')'
  }
  return void 0
}

function $cdMs(ms) {
  ms = +ms
  return ms >= 16 && ms <= 4000 ? Math.round(ms) : 60
}

function $cdInt(v, d) {
  v = Math.round(+v)
  return isFinite(v) ? v : d
}

// A prop -> the runs of visible text it puts on the stage, clipped to W x H. Spaces are
// transparent unless the prop sets o:1.
function $cdRuns(p, W, H) {
  var out = []
  if (!p || typeof p !== 'object') return out
  var y = $cdInt(p.y, -1), x0 = $cdInt(p.x, -9999)
  if (y < 0 || y >= H || x0 < -500) return out
  var ch = Array.from(String(p.t == null ? '' : p.t)
    .replace(/[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u2028\u2029\ufe0e\ufe0f]|[\ud800-\udfff]/g, ''))
  var c = $cdCol(p.c), bg = $cdCol(p.bg), b = !!p.b
  var push = function (s, e) {
    if (e <= 0 || s >= W) return
    var a = Math.max(s, 0), z = Math.min(e, W)
    if (z > a) out.push({ x: a, y: y, t: ch.slice(a - x0, z - x0).join(''), c: c, bg: bg, b: b })
  }
  if (p.o) {
    push(x0, x0 + ch.length)
    return out
  }
  for (var i = 0; i < ch.length;) {
    if (ch[i] === ' ') { i++; continue }
    var j = i
    while (j < ch.length && ch[j] !== ' ') j++
    push(x0 + i, x0 + j)
    i = j
  }
  return out
}

// Walking frames from column a to b, ending in "default" at b.
function $cdWalk(a, b, o) {
  o = o || {}
  a = Math.round(a)
  b = Math.round(b)
  var f = []
  if (a === b) return f
  var d = b > a ? 1 : -1, rt = o.moon ? d < 0 : d > 0, ey = rt ? 'right' : 'left'
  var n = o.turn === void 0 ? 3 : o.turn, i = 0
  for (var k = 0; k < n; k++) f.push({ pose: rt ? 'look-right' : 'look-left', x: a })
  for (var x = a; x !== b; i++) {
    x += d
    f.push({
      pose: { eyes: ey, arms: o.arms || ((i >> 1) % 2 ? 'one-up' : 'down'), feet: i % 2 ? 'left' : 'right' },
      x: x,
      ms: o.ms || 50,
    })
  }
  f.push({ pose: 'default', x: b })
  if (o.fx) {
    for (var j = 0; j < f.length; j++) {
      var r = o.fx(f[j], f[j].x, j)
      if (r && typeof r === 'object') f[j] = r
    }
  }
  return f
}

function $cdHsv(h, s, v) {
  h = (((h % 360) + 360) % 360) / 60
  var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - s * f), t = v * (1 - s * (1 - f))
  var m = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][i % 6]
  return 'rgb(' + Math.round(m[0] * 255) + ',' + Math.round(m[1] * 255) + ',' + Math.round(m[2] * 255) + ')'
}

// The `c` an animation's function receives (docs/ANIMATIONS.md describes each member).
function $cdCtx(st, W) {
  var c = {
    W: W, H: $cdH, G: $cdG, SW: $cdSW, SH: $cdSH,
    x: Math.max(0, Math.min(st.x, Math.max(0, W - $cdSW))),
    mx: Math.max(0, W - $cdSW),
  }
  c.P = function (e, a, f) { return { eyes: e || 'open', arms: a || 'down', feet: f || 'both' } }
  c.F = function (n, f) {
    var a = []
    for (var i = 0; i < n; i++) a.push(Object.assign({}, f))
    return a
  }
  c.T = function (x, y, t, col, ex) { return Object.assign({ x: x, y: y, t: t, c: col }, ex) }
  c.art = function (x, y, s, col, ex) {
    var L = typeof s === 'string' ? s.split('\n') : s, a = []
    for (var i = 0; i < L.length; i++) if (L[i]) a.push(c.T(x, y + i, L[i], col, ex))
    return a
  }
  c.walk = $cdWalk
  c.R = function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)) }
  c.pick = function (a) { return a[Math.floor(Math.random() * a.length)] }
  c.clamp = function (v, a, b) { return v < a ? a : v > b ? b : v }
  c.lerp = function (a, b, t) { return a + (b - a) * t }
  c.rgb = function (r, g, b) {
    return 'rgb(' + [r, g, b].map(function (v) { return Math.max(0, Math.min(255, Math.round(v))) }).join(',') + ')'
  }
  c.hsv = $cdHsv
  c.rainbow = function (i) { return $cdHsv(i * 37, 0.65, 1) }
  c.cat = function () {
    var a = []
    for (var i = 0; i < arguments.length; i++) a = a.concat(arguments[i] || [])
    return a
  }
  // Scenery: c.tile repeats a pattern across a whole row (shift scrolls it), c.rng is a seeded
  // random so a backdrop comes out the same on every frame.
  c.tile = function (pat, y, col, shift, ex) {
    pat = String(pat)
    var n = pat.length
    if (!n) return c.T(0, y, ' ', col, ex)
    var s = ((Math.round(shift || 0) % n) + n) % n, t = ''
    while (t.length < W + n) t += pat
    return c.T(0, y, t.slice(s, s + W), col, ex)
  }
  c.rng = function (seed) {
    var s = Math.round(seed) >>> 0 || 1
    return function () {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0
      return s / 4294967296
    }
  }
  return c
}

// Runs one animation; null when it throws or returns nothing usable.
function $cdRun(a, st, W) {
  try {
    var f = a.fn($cdCtx(st, W))
    if (Array.isArray(f) && f.length) return f.slice(0, 5000).filter(function (x) { return x && typeof x === 'object' })
  } catch (e) {}
  return null
}

// A short rest with one blink in the middle.
function $cdIdle(n) {
  var f = []
  for (var i = 0; i < n; i++) {
    var blink = i === Math.floor(n / 2)
    f.push({ pose: blink ? { eyes: 'closed' } : 'default', ms: blink ? 120 : 200 })
  }
  return f
}

// Picks an animation that fits width W and hasn't played recently. Scenery animations
// (meta.scene) alternate with the rest, so about every second one has a backdrop.
function $cdPick(st, W) {
  var ok = $cdL.filter(function (a) { return (+a.meta.w || 40) <= W })
  var fresh = ok.filter(function (a) { return st.hist.indexOf(a.id) < 0 })
  if (!fresh.length) {
    st.hist = []
    fresh = ok
  }
  var want = !st.scene
  var side = fresh.filter(function (a) { return !!a.meta.scene === want })
  if (!side.length) side = ok.filter(function (a) { return !!a.meta.scene === want })
  if (side.length) fresh = side
  var tot = 0
  fresh.forEach(function (a) { tot += +a.meta.weight || 1 })
  var r = Math.random() * tot, p = fresh[fresh.length - 1]
  for (var i = 0; i < fresh.length; i++) {
    r -= +fresh[i].meta.weight || 1
    if (r <= 0) {
      p = fresh[i]
      break
    }
  }
  if (p) st.scene = !!p.meta.scene
  return p
}

// The frames of one animation plus a short rest; a dance from st.moves when it fails.
function $cdPlay(st, W, a) {
  var f = a && $cdRun(a, st, W)
  if (f) {
    st.hist.push(a.id)
    if (st.hist.length > Math.max(1, Math.floor($cdL.length * 0.6))) st.hist.shift()
    return f.concat($cdIdle(2 + Math.floor(Math.random() * 5)))
  }
  var k = Object.keys(st.moves)
  return k.length ? st.moves[k[Math.floor(Math.random() * k.length)]] : $cdIdle(4)
}

// What Clawd does next: get back on stage, a dance, a stroll, or an animation.
function $cdNext(st, W) {
  var mx = Math.max(0, W - $cdSW), r = Math.random()
  if (st.x > mx) return $cdWalk(st.x, mx)
  if (st.x < 0) return $cdWalk(st.x, 0)
  if (!$cdL.length || r < 0.12) {
    var k = Object.keys(st.moves)
    if (k.length) return st.moves[k[Math.floor(Math.random() * k.length)]]
  }
  if (r < 0.27 && mx > 12) {
    var t = Math.floor(Math.random() * mx)
    if (Math.abs(t - st.x) > 4) return $cdWalk(st.x, t, { moon: Math.random() < 0.25 })
  }
  return $cdPlay(st, W, $cdPick(st, W))
}
