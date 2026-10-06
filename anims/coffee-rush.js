// Clawd chugs a sky-dropped coffee, pops wide awake, zooms edge to edge with afterimages, then crashes, snores and wants a refill.
$cdA("coffee-rush", { title: "Caffeine rush", w: 40 }, function (c) {
  var G = c.G, P = c.P, T = c.T, R = c.R, M = c.mx, B = "clawd_body", H = "fastMode", U = "one-up", Y = "chromeYellow", K = "warning", I = "inactive", S = "subtle", X = "text", C = "closed", i, j, k, q, w;
  var x = c.clamp(c.x, 0, M - 4), f = c.walk(c.x, x);
  function mug(u, v, n) {
    for (var a = [T(u, v, "█)", X)], m = 1; m <= n; m++) a.push(T(u + ((f.length + m) >> 1 & 1), v - m, "~≈°"[m - 1], m < 3 ? I : S));
    return a;
  }
  function eye(u, b, v) { return T(u + 2, G - !!v, "●   ●", X, { bg: b }); }
  function say(s, l) { return s ? [T(x + 4 - (s.length >> 1), G - 2, s, l || I)] : []; }
  function add(e, a, ms, q, ex) { f.push(Object.assign({ pose: P(e, a), props: q, ms: ms }, ex)); }
  function puff(u, d) { return T(u + (d > 0 ? -2 : 9), 6, "░▒", S); }
  // N frames of rising z z Z, Clawd at offset o.
  function zz(N, o) {
    for (var a = 0; a < N; a++) {
      for (q = [], k = 0; k < 9; k += 3) {
        j = a - k;
        if (j >= 0 && j < 10) q.push(T(x + 8 + (j >> 1), G + o - 1 - (j >> 1), j < 4 ? "z" : "Z", j < 4 ? I : "permission"));
      }
      add(C, 0, 150, q, { offset: o });
    }
  }
  var m0 = mug(x + 9, G, 0);

  // Dozing; the hand rises on autopilot and a mug drops into it.
  zz(6, 0);
  add(C, U, 300);
  for (i = 0; i < G; i++) add(C, U, 90 - i * 10, mug(x + 9, i, 2));
  add(C, U, 90, mug(x + 9, G + 1, 3), { offset: 1 });
  for (i = 0; i < 4; i++) add(i > 2 ? "wink" : "right", U, i > 2 ? 350 : 120, mug(x + 9, G, 3));
  // Sips, then a long chug as the steam dies.
  for (i = R(1, 2); i >= 0; i--) {
    w = R(0, 1) ? "sip" : "slurp";
    add("right", U, 200, mug(x + 9, G, 3));
    for (j = 0; j < (i ? 3 : 6); j++) add(C, U, 160, mug(x + 8, G, i ? 3 : 3 - (j >> 1)).concat(say(i ? w : j & 1 && "glug")));
  }
  add("wink", U, 600, m0.concat(say("ahh~", X)));
  add(0, U, 450, m0);
  // Kick: eyes pop one by one, flash, spark burst.
  add(0, U, 220, m0.concat(T(x + 6, G, "●", X, { bg: B })));
  add(0, U, 380, m0.concat(eye(x, B)));
  for (i = 0; i < 5; i++) {
    q = mug(x + 9, G - !i, 0).concat(say("!!", "error"));
    for (k = -1; k < 2; k += 2) q.push(T(x + 4 + k * (6 + 2 * i), G + 1, w = "✦✦**·"[i], j = i & 1 ? K : Y), T(x + 4 + k * (5 + 2 * i), G - 2 - (i >> 1), w, j));
    add(0, "up", 55, q.concat(eye(x, t = [X, Y, X, K, H][i], !i)), { color: t, offset: -!i });
  }
  // Vibrates, flings the empty mug, crouches...
  for (i = 1; i < 19; i++) {
    k = x + (i & 1); j = G + 1 + (i >> 1 & 1);
    add(0, U, 30, mug(k + 9, G, 0).concat(eye(k, H), T(k - 2, j, "(", I), T(k + 10, j, ")", I), T(k + 3, G - 2, "!!", "error")), { x: k, color: H });
  }
  for (i = 1; i < 6; i++) add("right", "up", 50, [T(x + 9 + i, G - i, ["▀▀", "█)", "▄▄", "(█"][i & 3], X)], { color: H });
  var d = x < M / 2 ? 1 : -1, E = function (d) { return d > 0 ? "right" : "left"; };
  add(E(d), 0, 220, [puff(x, d)], { offset: 1, color: H });

  // ...zooms edge to edge: afterimages, speed lines, dust.
  var Z = [], p = x, n = Math.round(130 / M + Math.random() - .3), s = R(M * .3 | 0, M * .6 | 0), r, t;
  function st(d, ms, o) {
    var q = [], A = [], n = Z.push([p, o]), e = E(d), g, v = ms < 60;
    if (v) [[5, "#6e3e30"], [3, "#aa5c44"]].forEach(function (h) {
      if ((g = Z[n - h[0]])) A.push({ x: g[0], offset: g[1], color: h[1], pose: P(e) });
    });
    if ((g = Z[n - 7]) && Math.abs(p - g[0]) > 9) {
      g = Z[n - 5][0] + (d > 0 ? -6 : 10);
      q.push(T(g, G, "─ ──", S), T(g + d, G + 1, "── ─", I));
    }
    if (ms == 50) q.push(puff(p, d));
    if (Math.random() < .3) q.push(T(p + R(-2, 10), R(1, 3), c.pick("✦*·"), c.pick([Y, K]), { z: -1 }));
    f.push({ x: p, pose: P(ms > 99 && n & 1 ? C : e, 0, n & 1 ? "left" : "right"), offset: v ? o : 0, color: ms < 90 ? H : B, props: q, actors: A, ms: ms });
  }
  for (i = 0; i <= n; i++) {
    t = i < n ? (d > 0 ? M : 0) : s;
    while ((r = Math.abs(t - p))) {
      p += d * Math.min(r, Z.length < 4 || (i == n && r < 12) ? 1 : 2);
      st(d, i < n || r > 12 ? 24 : 24 + (12 - r) * 12, -!R(0, 4));
    }
    if (i < n) st(d, 50, 0), st(d = -d, 40, -1);
  }
  x = s;

  // Crash: slow blinks, nods off, yawns, snores.
    "o030 c040 o012 c150 o010 c015a c020b c090c c020a c030".split(" ").forEach(function (s) {
    var m = "abc".indexOf(s[4]);
    add(s[0] == "o" ? 0 : C, m < 0 ? 0 : "up", s.slice(2, 4) * 10, m < 0 ? [] : [T(x + 4 - (m >> 1), G + 1, ["▀", " ", "▌ ▐"][m], B, { o: 1 })], { offset: +s[1] });
  });
  zz(13, 1);
  // Wakes groggy: where's the coffee? Hand up for a refill... nothing.
  add(C, 0, 300);
  add("left", 0, 350, say("?"));
  add("right", 0, 350, say("?"));
  add("right", U, 650);
  add(C, 0, 550, say("..."));
  f.push({ pose: "default" });
  return f;
});
