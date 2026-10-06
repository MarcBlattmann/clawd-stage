// Clawd catches a falling guitar, tunes, grooves, shreds a headbanging solo in a lightning storm, then lands a mid-air power chord with a shockwave.
$cdA("guitar-solo", { title: "Guitar solo", w: 40 }, function (c) {
  var G = c.G, T = c.T, R = c.R, pk = c.pick, W = c.W, x = c.clamp(c.x, 6, c.mx - 8), f = c.walk(c.x, x), N = [], t, i, o, k, ex, bx, j, n;
  var gc = pk(["error", "permission", "autoAccept", "success"]), Y = "chromeYellow", eb = "#8cd2ff", X = "text";
  var E = {o:"open",c:"closed",l:"left",r:"right",w:"wink"}, A = {d:"down",u:"up",o:"one-up"}, I = "inactive";
  function note() { N.push([x + R(9, 10), G, R(-2, 2) / 2, -.5, pk("♪♫"), c.rainbow(R(0, 9)), 12]); }
  // N: particles [x, y, dx, dy, char, color, life]. s: eye+arm(+foot) letters, gy: guitar row, d: neck finger (-1: none, -2: strings ring).
  function fr(s, o, ms, gy, ex, d, cl) {
    N = N.filter(function (n) { n[0] += n[2]; n[1] += n[3]; return n[6]-- > 0 && n[1] > -1; });
    var q, p = N.map(function (n) { return T(Math.round(n[0]), Math.round(n[1]), n[4], n[5]); });
    if (gy != null) {
      p.push(T(x - 5, gy, "≡╪", X), T(x - 3, gy, d < -1 ? "≈~≈~≈~≈~≈".substr(f.length % 2, 8) : gy - o == G + 1 ? "━━━ ━━━━" : "━━━━━━━━", d < -1 ? Y : "#b07848"), T(x + 5, gy, "◖●◗", gc));
      if (d > -2 && s[1] == "d") p.push(T(x + 2, gy, "~≈~", X));
      if (d >= 0) p.push(T(x - 3 + d, gy, "•", X, {b:1}));
    }
    f.push(q = { pose: c.P(E[s[0]], A[s[1]], s[2] ? "left" : "both"), offset: o, ms: ms, props: p.concat(ex || []) });
    if (cl) q.color = cl;
  }
  // A guitar appears in the sky ("!") and falls, catch with a squash, swing it across the body.
  fr("od", 0, 300);
  for (t = -1; t < G - 1; t++) fr(t < 1 ? "od" : "ou", 0, [70, 260, 90, 60][t + 1], t, !t && [T(x + 4, G - 1, "!", Y, {b:1})]);
  fr("cu", 1, 90, G);
  fr("ou", 0, 180, G - 1);
  fr("cd", 0, 60, G);
  fr("wo", 0, 450, G + 1);
  // Tuning: two sour plucks, "?", a peg twist, a golden one.
  for (i = 0; i < 3; i++) {
    N.push([x + 9, G, .5, -.5, "♪", i < 2 ? I : Y, 10]);
    fr("ld", 0, 90, G + 1, 0, -1);
    fr(i < 2 ? "lo" : "ro", 0, 380, G + 1, i == 1 && [T(x + 4, G - 1, "?", X, {b:1})]);
    if (i == 1) fr("lo", 0, 300, G + 1, [T(x - 5, G, "↻", Y)]), fr("lo", 0, 200, G + 1);
  }
  fr("wo", 0, 400, G + 1);
  // Groove: strum, foot taps, eyes on the notes.
  for (n = R(16, 20), t = 0; t < n; t++) {
    if (t % 3 == 0) note();
    fr((t % 8 == 6 ? "c" : t & 4 ? "r" : "o") + (t % 2 ? "o" : "d") + (t % 4 == 1 ? "l" : ""), 0, 130, G + 1, 0, -1);
  }
  // Build-up: faster, head bobbing, the finger runs the neck.
  for (t = 0; t < 20; t++) {
    if (t % 2 == 0) note();
    o = t % 4 >> 1;
    fr(t % 2 ? "co" : "cd", o, 120 - t * 3, G + 1 + o, 0, t % 8);
  }
  fr("wo", 0, 260, G + 1);
  // Solo: headbanging flings sweat, headstock sparks, lightning flashes Clawd yellow.
  for (n = R(34, 40), t = 0; t < n; t++) {
    o = t % 4 < 2 ? 1 : 0;
    k = t % 6;
    if (t % 3 && t < n - 5) note();
    N.push([x - 5, G + 1 + o, -R(1, 2) / 2, -R(1, 2) / 2, pk("✦✧*·"), pk([Y, eb, X]), 4]);
    if (t % 4 == 2) N.push([x + 1, G, -1, -.5, "°", eb, 2], [x + 7, G, 1, -.5, "°", eb, 2]);
    if (!k) bx = (x + 12 + R(0, W - 19)) % W;
    ex = k < 2 ? c.art(bx, 0, "╲\n╱\n╲\n✸", k ? eb : Y, {b:1}) : [];
    fr((t % 9 == 8 ? "w" : "c") + (t % 2 ? "o" : "d") + (o ? "" : "l"), o, R(55, 68), G + 1 + o, ex, +"02467531"[t % 8], k ? 0 : Y);
  }
  // Crouch, leap with a windmill, mid-air power chord (flash, rays, sparks), land, hold it high, shockwave.
  fr("co", 1, 420, G + 2);
  fr("oo", -1, 70, G, [T(x + 1, G + 2, "░    ░", I)]);
  fr("oo", -2, 110, G - 1);
  for (i = 0; i < 6; i++) k = i % 2 * 2 - 1, j = i >> 1, N.push([x + 4 + 5 * k, 1 + j, k, (j - 1) / 2, "✦✧*"[j], i < 2 ? Y : X, 6]);
  ex = [T(x, 1, "╲   │   ╱", Y, {b:1}), T(x - 1, 0, "╲    │    ╱", X)];
  fr("cd", -2, 120, G - 1, ex, -2, X);
  fr("cd", -2, 300, G - 1, ex, -2, Y);
  fr("od", -1, 60, G, 0, -2);
  for (j = 0; (k = 2 * j + 2) < Math.min(Math.max(x, W - x), 46) + 14; j++) {
    ex = j ? [] : [T(x - 7, G + 2, "░▒              ▒░", I)];
    [k, k - 7].forEach(function (q) {
      var cl = [Y, "warning", eb, "subtle"][q / 12 | 0];
      if (q > 5 && cl) ex = ex.concat(c.art(x + 3 - q, G, " (\n(\n (", cl), c.art(x + 4 + q, G, ")\n )\n)", cl));
    });
    if (j % 3 == 2) N.push([x + R(-4, 6), G - 2, 0, -.5, "♫", c.rainbow(j), 6]);
    fr((j < 8 ? "c" : "o") + (j ? "u" : "o"), j ? 0 : 1, j ? 45 : 90, j ? j < 2 ? G : G - 1 : G + 2, ex, -2);
  }
  fr("wu", 0, 500, G - 1, 0, -2);
  // Dip, toss the guitar into the sky, a twinkle, a bow, a wink.
  fr("ou", 1, 120, G);
  for (t = G - 2; t > -2; t--) fr("ou", 0, 60, t, [T(x + 1, t + 1, "·", Y)]);
  fr("od", 0, 300, null, [T(x + 1, 0, "✦", Y)]);
  fr("cd", 1, 450);
  fr("wd", 0, 600);
  f.push({ pose: "default" });
  return f;
});
