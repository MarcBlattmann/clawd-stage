// Clawd reads and nods off (z Z); a snore flings the book up, it lands on his head. BONK! He jolts awake, blushes, tosses it.
$cdA("bookworm", { title: "Bookworm", w: 44 }, function (c) {
var R = c.R, t = c.T, i, k, j, P = [], x = c.clamp(c.x, 0, c.mx - 14), f = c.walk(c.x, x);
var CV = c.hsv(R(0, 359), .6, .85), PA = { bg: "#f0e6cd" }, Y = "chromeYellow", W = "warning", N = "inactive", BD = { b: 1 }, EY = ["left", "open", "right"];
var O = 0, E = "open", A = "down", B = 0, S = 0, bx = x + 4, by = 6, T, bl, K = "|▌     ▐|▄▄▄▄▄|▐█▌|▀▀▀▀▀".split("|");
function tx() { T = ""; for (var n = 0; n < 5; n++) T += n == 2 ? "│" : c.pick("⠶⠦⠴⠤⠒⠷⠆"); }
function Z(s, px, py) { P.push({ x: px, y: py, s: s, a: 0 }); }
function D(y) { return [t(x - 1, y, "·         ·", N)]; }
// Frame: eyes e, book (B 1 open, 2-4 tumbling) centred on bx/by, z puffs while S, rising z/notes, extras.
function F(ms, e, xp) {
 var p = [], s = K[B];
 E = e || E;
 S && f.length % 4 == 0 && Z("z", x + 7, 3 + O);
 B && p.push(t(bx - (s.length >> 1), by, s, CV, B < 2 && PA));
 B == 1 && p.push(t(bx - 2, by, T, N, PA));
 P = P.filter(function (q) {
  if (++q.a % 2 == 0) { q.y--; q.x += q.a & 2 ? 0 : 1; }
  p.push(t(q.x, q.y, q.y < 3 ? q.s.toUpperCase() : q.s, q.s > "z" ? Y : N));
  return q.y > 0;
 });
 f.push({ x: x, offset: O, pose: c.P(E, A), ms: ms, props: p.concat(xp || []), paint: function (u, r) {
  return bl && r == 1 && u % 4 == 2 ? "#ff7d96" : "clawd_body";
 } });
}
// Plop down; a book pops into his lap and falls open.
F(200); O = 1; F(100, 0, D(6));
B = 3; F(160, 0, [t(x + 4, 4, "✦", Y)]); B = 2; F(90); tx(); B = 1; F(350);
// Eyes sweep each line, maybe a reaction, then a page flips over.
for (var g = 2; g--;) {
 for (i = R(1, 2) * 3; i--;) F(i % 3 == 1 ? 140 : R(200, 300), EY[2 - i % 3]);
 R(0, 2) || (j = R(0, 2), F(450, ["open", "wink", "left"][j], [t(x + 9, 4, "!♥?"[j], [W, "error", "permission"][j], BD)]));
 for (i = 0; i < 3; i++) F(70, EY[2 - i], [t(x + 5 - i, 5, "╱│╲"[i], PA.bg)]);
 tx(); F(200);
}
// Heavy blinks, his head nods down behind the book, he jolts up: twice (the 2nd nod is longer).
var J = [t(x + 9, 3, "!", W, BD)];
for (k = 0; k < 2; k++) {
 F(R(300, 400), "open"); F(150 + k * 150, "closed"); F(250, "open"); F(350, "closed");
 O = 2; S = k; Z("z", x + 7, 4); for (i = 2 + k * 3; i--;) F(130);
 S = O = 0; by = 5; F(70, "open", J); O = 1; by = 6; F(350, 0, J);
 k || (F(160, "left"), F(160, "right"), F(200, "open"));
}
// Out cold, sitting up. The snore builds... SNORT: his arms jerk up and fling the book.
S = 1; for (i = 7; i--;) F(140, "closed");
S = 0; P = [];
F(300, 0, [t(x + 9, 4, "z", N)]); F(300, 0, [t(x + 9, 4, "zZ", N)]); F(400, 0, [t(x + 9, 3, "zZZ", "text", BD)]);
for (i = 0; i < 5; i++) { by = 5 - i; B = 2 + i % 3; A = i < 2 ? "up" : "down"; F(50 + i * 20); }
B = 1; F(380);
for (by = 2; by < 5; by++) { B = by < 4 ? by + 1 : 2; F(110 - by * 15); }
O = 2; by = 5;
for (i = 0; i < 2; i++) F(260, 0, [t(x + i, 4 - i, "*", W), t(x + 8 - i, 3 + i, "✦", Y), t(x + 2, 2, "BONK!", "error", BD)]);
F(200, "open");
// He springs up; the book bounces off his head and lands beside him.
A = "up";
for (i = 0; i < 11; i++) {
 O = "21001232222"[i] - 2; by = +"32100123456"[i]; bx = x + 4 + +"01234567777"[i]; B = i > 9 ? 4 : 2 + i % 3;
 if (i > 4) A = "down";
 F(i > 5 ? 60 : 80, 0, i < 5 ? [t(x + 3, 2 + O, "!", W, BD)] : i == 6 && D(6));
}
F(250);
// Did anyone see? Looks around, blushes, sweats, scratches his head.
bl = 1; F(400, "left"); F(400, "right");
var sw = function (y) { return t(x, y, "°", "permission"); };
F(300, "open", [sw(3)]); A = "one-up";
for (i = 0; i < 5; i++) F(140, "closed", [sw(3 + (i > 2)), t(x + 8 + i % 2, 3, "~", N)]);
bl = 0;
// Crouches, grabs the book, looks away and tosses it over his shoulder.
A = "down"; F(300, "right"); O = 1; F(220);
A = "one-up"; B = 3; bx = x + 10; by = 5; F(150); O = 0; by = 4; F(350);
for (i = 0; i < 6; i++) { bx++; by--; B = 2 + i % 3; A = i < 2 ? "one-up" : "down"; F(50, "left"); }
B = 0; F(150);
// Dusts off his hands and whistles innocently.
for (i = 4; i--;) { A = i % 2 ? "up" : "down"; F(110, "open", i % 2 && D(3)); }
Z("♪", x + 9, 3);
for (i = 0; i < 9; i++) { i == 3 && Z("♫", x + 9, 3); F(110, "wink"); }
P = []; F(250, "open");
return f;
});
