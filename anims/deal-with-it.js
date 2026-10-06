// Shades wobble down onto Clawd, DEAL WITH IT types out, bling may drop; he bobs, winks, flicks the shades through the words.
$cdA("deal-with-it", { title: "Deal with it", w: 40 }, function (c) {
  var f = [], G = c.G, R = c.R, P = c.P, Y = "chromeYellow", AU = "rgb(255,215,60)", M = "DEAL WITH IT", Q = "▀██▀██▀";
  var x = c.clamp(c.x, 0, c.mx - 16), tx = x + 11, ty = R(1, 2), n = 0, X = "text", tc = X, dr = [], i, k, y, w;
  var GC = "rgb(100,100,132)", gl = { x: x + 1, y: -1, t: Q, c: GC }, ch = 0;
  f = f.concat(c.walk(c.x, x));
  function T(a, b, t, col, e) { return c.T(a, b, t, col || Y, e); }
  // Words, chain and shades first; per-frame extras draw on top. `on` props ride his offset on his body.
  function A(ms, pose, p, o) {
    o = o || 0;
    var q = [];
    for (var j = 0; j < n; j++) if (M[j] > " ") q.push(T(tx + j, ty + (dr[j] || 0), M[j], tc, { b: 1 }));
    [ch, gl].forEach(function (g) {
      if (g) q.push(T(g.x, g.y + (g.on ? o : 0), g.t, g.c, g.on ? { b: 1, bg: "clawd_body" } : { b: 1, z: g.z }));
    });
    f.push({ x: x, pose: pose || "default", ms: ms, offset: o, props: q.concat(p || []) });
  }
  // A glint sweeps across both lenses, then sparkles off the corner.
  function S() {
    [2, 3, 5, 6].forEach(function (a) { A(55, 0, [T(x + a, G, "▝", X, { bg: GC })]); });
    A(150, 0, [T(x + 7, G - 1, "✦", X)]);
    A(90, 0, [T(x + 7, G - 1, "·", X)]);
  }

  // Setup: glance around, a glint up high.
  A(280, "look-left"); A(280, "look-right"); A(100, P("closed"));
  A(160, 0, [T(x + 4, 0, "✦")]); A(120, 0, [T(x + 4, 0, "·")]);

  // Shades sway down, eyes follow, hover over his head.
  for (y = 0, w = R(0, 3); y < G; y++) for (k = y < 3 ? 3 : 6; k--;) {
    i = [0, 1, 0, -1][w++ % 4]; gl.x = x + 1 + i; gl.y = y;
    A(120 + y * 30, P(i > 0 ? "right" : i < 0 ? "left" : 0));
  }
  gl.x = x + 1; A(320);

  // Snap on, squash, glint, type the words.
  gl.y = G; gl.on = 1;
  A(70, P("closed"), [T(x, G + 1, "*"), T(x + 8, G + 1, "*")], 1);
  A(110, 0, [T(x - 1, G, "✦"), T(x + 9, G, "✦")]);
  S(); A(260);
  for (n = 0; n < 12;) A(M[n++] > " " ? R(60, 120) : 220, 0, [T(tx + n, ty, "▌", "subtle")]);
  for (k = 0; k < 4; k++) { tc = k % 2 ? X : Y; A(150); }

  // Maybe a gold chain drops behind his head onto his chest: clink, bling.
  if (R(0, 3)) {
    ch = { x: x + 2, t: "╰•$•╯", c: AU, z: -1 };
    for (y = 0; y <= G; y++) { ch.y = y; A(50); }
    ch.y = G + 1; ch.on = 1;
    A(70, 0, [T(x - 1, G + 2, "·"), T(x + 9, G + 2, "·")], 1);
    A(140, 0, [T(x + 4, G + 1, "✦", X, { b: 1, bg: "clawd_body" })]);
    A(200);
  }

  // Head-bob to the beat, tapping a foot; notes float up over his head.
  for (k = 0, w = R(3, 5) * 2; k < w; k++) {
    var dn = k % 2 < 1, j = k >> 1, p = [];
    for (i = 0; i <= j; i++) if (k - 2 * i < 4)
      p.push(T(x + 2 + i * 5 % 7 + (k - 2 * i >> 1), G - 1 - k + 2 * i, i % 2 ? "♫" : "♪", i % 2 ? "autoAccept" : "suggestion"));
    tc = dn ? Y : X;
    A(dn ? 170 : 240, P(0, 0, dn ? "both" : j % 2 ? "left" : "right"), p, dn ? 1 : 0);
  }
  S(); A(200);

  // Shades up, wink, flick: they spin off and knock each letter loose.
  A(220, P(0, "one-up"));
  gl.y = G - 1; gl.on = 0;
  A(90, P("closed", "one-up"));
  A(750, P("wink", "one-up"), [T(x + 9, G - 2, "✦")]);
  for (y = G - 1, k = 0, w = x + 4; k < 21; k++) {
    var p = gl ? [T(w, y, "·", "subtle", { z: -1 })] : [], h = Math.abs(3 - k % 6);
    w += 1 + k % 2; y = w < tx + 13 ? Math.max(ty, y - 1) : y - 1;
    for (i = 0; i < 12; i++) if (i in dr) dr[i]++; else if (gl && y == ty && Math.abs(tx + i - w) < 3) dr[i] = -1;
    if (gl) { gl.x = w - h; gl.y = y; gl.t = Q.substr(3 - h, h * 2 + 1); if (y < -1) gl = 0; }
    A(k < 2 ? 70 : 50, P(k < 18 ? "right" : 0, k < 2 ? "one-up" : "down"), p);
  }
  n = 0;

  // Shrug: the chain clinks down and fades.
  if (ch) {
    A(220, P(0, "up"));
    ch.on = ch.z = 0; ch.y = G + 2;
    A(140, P("closed", "up"), [T(x, G + 2, "·"), T(x + 8, G + 2, "·")]);
    [AU, "warning", "subtle"].forEach(function (col, j) {
      ch.c = col; A(160, 0, [T(x - 1 - j, G + 2 - j, "✦", col), T(x + 9 + j, G + 2 - j, "✦", col)]);
    });
    ch = 0;
  }
  // One smug nod, a wink to the audience.
  A(130, P("closed"), 0, 1);
  A(500, P("wink"), [T(x + 8, G - 1, "✦", X)]);
  A(300);
  return f;
});
