// Clawd holds up a "hi!" sign, a blue friend walks in and waves back, both hop, the friend leaves.
$cdA("hello-sign", { title: "Hello sign", w: 50 }, function (c) {
  var f = [], G = c.G;
  var x = c.clamp(c.x, 0, c.mx - 30);
  f = f.concat(c.walk(c.x, x));

  // The sign sits right of Clawd, its pole held by the raised arm (sprite column 8 = x+8).
  var sign = function (lift) {
    return c.art(x + 9, G - 3 + lift, ["╭────╮", "│hi! │", "╰─┬──╯"], "text")
      .concat([c.T(x + 11, G + lift, "│", "inactive")]);
  };
  // Pull the sign up out of the ground: it rises 2 rows.
  for (var i = 2; i >= 0; i--) f.push({ x: x, pose: c.P("open", "one-up"), props: sign(i), ms: 90 });
  f = f.concat(c.F(6, { pose: c.P("wink", "one-up"), props: sign(0), ms: 100 }));

  // Friend walks in from the right edge (off-stage x = W) to stand next to the sign.
  var fx = x + 19, blue = "permission";
  for (var p = c.W; p >= fx; p--) {
    f.push({ pose: c.P("right", "one-up"), props: sign(0), ms: 45,
      actors: [{ x: p, color: blue, pose: c.P("left", "down", p % 2 ? "left" : "right") }] });
  }
  // Both wave, then hop together with a little heart between them.
  for (var k = 0; k < 6; k++) {
    var up = k % 2 ? "up" : "one-up";
    f.push({ pose: c.P("open", "one-up"), props: sign(0), ms: 140,
      actors: [{ x: fx, color: blue, pose: c.P("open", up) }] });
  }
  var heart = c.T(x + 17, G - 2, "♥", "error");
  [0, -1, -2, -1, 0, -1, -2, -1, 0].forEach(function (o, j) {
    f.push({ pose: "arms-up", offset: o, props: sign(o).concat(j > 2 ? [heart] : []), ms: 70,
      actors: [{ x: fx, offset: o, color: blue, pose: "arms-up" }] });
  });
  // Friend leaves to the right; Clawd lowers the sign back into the ground.
  for (p = fx; p <= c.W; p += 1) {
    f.push({ pose: "look-right", props: sign(0), ms: 40,
      actors: [{ x: p, color: blue, pose: c.P("right", "down", p % 2 ? "left" : "right") }] });
  }
  for (i = 0; i <= 3; i++) f.push({ pose: c.P("open", "one-up"), props: i < 3 ? sign(i) : [], ms: 90 });
  f.push({ pose: "default" });
  return f;
});
