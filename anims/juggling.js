// Clawd juggles faster and faster until a ball bonks him; he catches the rest, balances one on his head and bows.
$cdA("juggling", { title: "Juggling", w: 40 }, function (c) {
  var x = c.clamp(c.x, 1, c.mx - 7), X = x, f = c.walk(c.x, x), P = c.P, R = c.R, T = c.T, i, t, e = "open", L = [], n = [0, 0];
  // Loop (col,row): right hand, over the top, left hand, low pass back.
  "83827160504030211213223242526272".replace(/../g, function (m) { L.push([+m[0], +m[1]]); });
  var C = "error warning success permission autoAccept".split(" ").sort(function () { return Math.random() - .5; });
  // n: hits the right hand, d: drops in, s: ground slot.
  var t3 = 46 + 16 * R(0, 1), B = [6, 11, 17, t3, t3 + 27].map(function (v, i) { return { c: C[i], s: 10 + i % 3 * (i < 3), n: v, d: i < 3 ? 2 * i - 17 : v - 13 }; });
  var bb = B[R(0, 4)], tu = t3 + 45 + R(0, 10);
  tu += (bb.n - tu + 1600) % 16;
  var tf = tu + R(15, 19), tb = tf + 3;
  // After the bonk: catch time ct, hand hx, stack slot k.
  B.forEach(function (b) { var k = (tb - b.n) % 16, h = k > 0 && k < 10; b.ct = tb + (h ? 9 - k : (16 - k) % 16); b.hx = h ? 1 : 8; });
  bb.ct = tb + 5; bb.hx = 4; bb.k = 0;
  function pos(b, t, o) {
    var k = b.n - t, j = t - b.d, u = t - tu;
    if (t >= b.ct) return [b.hx, 3 - (b.k == null ? b.k = n[b.hx >> 3]++ : b.k) + o];
    if (b == bb && u >= 0) return u < 4 ? [8, 3 - u] : t < tf ? [0, -1] : [4, t <= tb ? t - tf + o : +"32112"[t - tb]];
    if (k > 3) return [Math.min(b.s, 5 + k), j < 0 ? -1 : j < 9 ? +"012345656"[j] : 6];
    return k > 0 ? [[9, 4], [9, 5], [8, 6]][k - 1] : L[-k % 16];
  }
  function balls(t, o, u) {
    return B.map(function (b) { var q = pos(b, t, o); return T(x + q[0] + ((q[0] > 4) - (q[0] < 4)) * ~~u, q[1] - ~~u, "●", b.c); });
  }

  for (t = -17; t <= tb + 9; t++) {
    var d = t - tb, u = t - tu, o = +(d >= 0 && d < 3), ft = "both", m = 0, p = balls(t, o), q = +(t >= tf);
    if (!t) f.push({ pose: P("wink"), props: p, ms: 400 }, { pose: P("open", "up"), props: p, ms: 300 });
    if (t == -12) e = "right";
    // Eyes follow catches; kicks lift a foot.
    B.forEach(function (b) {
      var k = t - b.n;
      if (k >= 0) m++;
      if (k >= 0 && d < 0 && (b != bb || u < 0)) e = k % 16 ? k % 16 == 9 ? "left" : e : "right";
      if (k > -4 && k < -1) ft = "left";
      if (k > -14 && k < -1 && t > 0) e = "right";
    });
    // One goes too high: deadpan "?" (hands keep going), "!", bonk.
    if (u >= 0 && u < 5) { e = "right"; if (u > 1) p.push(T(x + 8, 4 - u, "¦", "inactive")); }
    if (u > 6 && d < 0) e = "open", p.push(T(x + 10, 3, "?!"[q], q ? "error" : "text", { b: 1 }));
    if (q && d < 0 && t > tf) p.push(T(x + 4, t - tf - 1, "¦", "inactive"));
    if (d >= 0) {
      e = d < 7 ? "closed" : d < 8 ? "left" : "right";
      if (d < 4) p.push(T(x + 10, 1, "bonk!", "warning", { b: 1 }));
      if (d < 7) p.push(T(x + 2 + (d & 1), 3 + o, "✦*✧"[d % 3] + (d & 1 ? "  " : "    ") + "✦✧*"[d % 3], "chromeYellow"));
    }
    f.push({ pose: P(e, t < 0 ? "down" : "up", ft), offset: o, props: p, ms: t < 0 ? 50 : d >= 0 ? (d ? 90 : 450) : q ? 90 : u > 4 ? 75 : 110 - 12 * m });
  }
  // He shuffles under the rolling head ball, ta-da.
  [[0, 5, "right", 150], [1, 4, "right", 110, "left"], [1, 3, "left", 150], [0, 4, "left", 110, "right"], [0, 4, "open", 200], [0, 4, "wink", 650, 0, 1]].forEach(function (w) {
    x = X + w[0]; bb.hx = w[1]; var p = balls(1e4, 0);
    if (w[5]) p.push(T(x + 10, 1, "ta-da!", "chromeYellow", { b: 1 }));
    f.push({ x: x, pose: P(w[2], "up", w[4] || "both"), props: p, ms: w[3] });
  });
  // Bow, applause, bow, spring up and fling them away.
  for (i = 0; i < 3; i++) {
    var a = i & 1, ap = balls(1e4, 1 - a);
    for (t = 0; i && t < 5; t++) ap.push(T(x + (x > 4 && R(0, 1) ? R(-4, -1) : R(10, 15)), R(0, 2), c.pick("✦·*♪"), c.rainbow(R(0, 9))));
    f.push({ pose: P(a ? "open" : "closed", "up"), offset: 1 - a, props: ap, ms: a ? 220 : 420 });
  }
  for (i = 1; i < 6; i++) f.push({ pose: P("open", i < 3 ? "up" : "down"), props: balls(1e4, 0, i), ms: 55 });
  f.push({ pose: P("wink"), ms: 500 }, { pose: "default" });
  return f;
});
