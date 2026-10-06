// Drum kit drops in; Clawd grooves BA-DUM ever faster, rolls into a cymbal CRASH, then the ba-dum-tss.
$cdA("drum-solo", { title: "Drum solo", w: 44 }, function (c) {
  var T = c.T, R = c.R, x = c.clamp(c.x, 7, c.mx - 12), f = c.walk(c.x, x), o = 0, L, Q, K = [-7, -7, 6, 2], fl, cw,
    cc, ps = [], bt = [], ft, col, i, j, n, s = 1, W = "#e1b982", Y = "chromeYellow", E = "error", P = "permission", I = "inactive",
    D = ["left", "right"], B = { b: 1 }, H = "▄▄▄▄", U = "▀▀▀▀";
  function sp(a, b, t, k, u, v, n) { ps.push([a, b, t, k, u, v, n]); }
  function heat(t) { col = c.rgb(215 + 37 * t, 119 - 69 * t, 87 - 46 * t); }
  // Sticks L/Q: 0 none, 1 on drum, 2 cocked, 3 raised, 4 empty raised hand.
  function fr(e, ms, ex) {
    var h = c.G + o, r = [], k = 1;
    function z(a, b, t, k, g) { r.push(T(x + a, b, t, k, { z: -1, bg: g })); }
    for (z(10, 1 + K[2], (cw & 1 ? U : H) + "█" + (cw > 1 ? U : H), cc || Y); ++k < 7;) z(14, k + K[2], k > 5 ? "┴" : "│", I);
    for (k = 0; k < 2; k++) z(14 * k - 5, 5 + K[k], H + "▄", k ? P : E, fl == k + 1 ? Y : "text"), z(14 * k - 5, 6 + K[k], "█▓▓▓█", k ? P : E);
    z(3, 5 + K[3], "▀▀▀", I); z(3, 6 + K[3], "╱│╲", I);
    L % 4 && r.push(T(x - 1, h + 2 - L, L > 1 ? "╲" : "╱", W));
    Q % 4 && r.push(T(x + 9, h + 2 - Q, Q > 1 ? "╱" : "╲", W));
    ps = ps.filter(function (p) { r.push(T(p[0], p[1], p[2], p[3], B)); p[0] += p[4]; p[1] += p[5]; return --p[6]; });
    f.push({ pose: c.P(e, L > 2 ? "up" : Q > 2 ? "one-up" : "down", ft), offset: o, color: col, props: r.concat(bt, ex || []), ms: ms | 0 });
  }
  // s: 0 snare, 1 tom.
  function hit(s, d, e) {
    s ? Q = 1 : L = 1; fl = s + 1; ft = D[+(ft == D[0])];
    bt[0] || sp(x + 14 * s - 4, 4, s ? "DUM" : "BA", s ? P : E, 0, -1, 5 - 2 * s);
    sp(x + 21 * s - 6, 5, c.pick("*✦·"), Y, 2 * s - 1, -1, 2);
    fr(e || D[s], d * .45);
    fl = 0; L = Q = 2; fr(e || "open", d * .55);
  }

  // Drums drop in, the cymbal grows out of the ground.
  for (j = 0; j < 2; j++) {
    for (i = -6; i <= 0; i++) K[j] = i, fr(D[j], 40);
    sp(x + 14 * j - 6, 6, "·     ·", "subtle", 0, 0, 1);
    o = -1; fr("closed", 90); o = 0; fr(D[j], 260);
  }
  for (i = 5; i >= 0; i--) K[2] = i, fr("right", 70);
  sp(x + 13, 0, "♪", Y, 1, 0, 3);
  for (i = 0; i < 4; i++) cw = i & 1 ? 0 : 2 - i / 2, fr("wink", 90);
  // Sticks fall into his hands, twirl, hop onto the stool, count-in.
  for (L = Q = 4, i = -2; i < 3; i++) fr("open", 50, [T(x - 1, i, "│         │", W)]);
  L = Q = 3; fr("closed", 120); fr("open", 200);
  for (i = 0; i < 4 * R(1, 2); i++) Q = 0, fr("wink", 55, [T(x + 9, 3, "╱─╲│"[i % 4], W)]);
  Q = 3; fr("open", 160);
  o = 1; fr("closed", 160);
  L = Q = 2;
  for (i = 0; i < 4; i++) o = [-1, -2, -3, -2][i], K[3] = i < 2 ? 2 - i : 0, fr("open", 60);
  o = -1; fr("closed", 110); fr("open", 250);
  for (i = 1; i < 5; i++) L = Q = 3, fr("open", 200, [T(x + 4, 1, "" + i, "text", B)]), L = Q = 2, fr(i > 3 ? "wink" : "open", 150);
  // Groove speeds up, eyes close; then the roll heats him up.
  n = R(13, 18);
  for (i = 0; i < n; i++) j = 300 - i * 200 / n, s = i % 4 == 3 && R(0, 1) ? s : !s, hit(+s, j, j < 170 && "closed");
  for (ps = [], i = 0; i < 14; i++) {
    heat(i / 13); i % 3 || sp(x + R(1, 7), 2, "'", P, R(-1, 1), -1, 2);
    bt = [T(x - 5, 0, "b" + "r".repeat(i + 1) + (i > 11 ? "!" : ""), E, B)]; hit(i & 1, 96 - i * 2);
  }
  // Squash... CRASH! Wobble and glitter.
  bt = []; L = Q = 3; o = 0; ft = "both"; fr("closed", 450);
  o = -2;
  for (j = 0; j < 18; j++) {
    cw = j > 13 ? j & 1 : 2 - (j & 1); cc = j & 1 ? Y : "text";
    if (j == 3) o = -1, L = Q = 2;
    j < 10 && sp(x + R(9, 19), R(0, 2), c.pick("✦✧*·"), c.rainbow(R(0, 9)), 0, 1, 3);
    heat(1 - j / 17);
    fr(j < 3 ? "closed" : j < 9 ? "open" : "right", 50 + j * 5, j < 12 ? [T(x + 11, 0, "CRASH!", c.rainbow(j), B)] : []);
  }
  cw = 0; cc = col = void 0; fr("open", 500);
  // ba... dum... tss.
  bt = [T(x - 1, 0, "ba-", "text", B)]; hit(0, 600);
  bt.push(T(x + 2, 0, "dum-", "text", B)); hit(1, 600);
  bt.push(T(x + 6, 0, "tss", Y, B)); sp(x + 19, 1, "✧", Y, 1, -1, 3);
  for (i = 0; i < 6; i++) Q = i < 3 ? 3 : 2, cw = i < 4 ? 1 + (i & 1) : 0, fr(i < 2 ? "closed" : "wink", 110);
  fr("wink", 700);
  // Sticks fly off, the kit sinks, a bow.
  bt = []; L = Q = 4; ft = "both";
  for (i = 0; i < 4; i++) fr("open", 60, [T(x - 1 - i, 2 - i, "╲─╱│"[i], W), T(x + 9 + i, 2 - i, "╱─╲│"[i], W)]);
  for (L = Q = o = 0, i = 1; i < 7; i++) K = [i, i, i, i], fr(D[i & 1], 70);
  o = 1; fr("closed", 350);
  f.push({ pose: "default", ms: 300 });
  return f;
});
