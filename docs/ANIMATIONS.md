# Writing animations

One animation is one file, `anims/<id>.js`, whose kebab-case id is its file name. `node tools/build.js` bundles every file into `hooks/engine.js`. Between walks and short dances, the scheduler picks animations that fit the stage width and haven't played recently, alternating scenery and non-scenery ones.

## File format

```js
// One line saying what happens.
$cdA("<id>", { title: "Human title", w: 60 }, function (c) {
  var f = [];
  // ...build frames...
  return f;
});
```

| `meta` key | Meaning |
|---|---|
| `title` | Name shown by `/clawd <id>` |
| `w` | Narrowest stage it works on, 30..160 (default 40); skipped below that |
| `scene` | `1` for a full-width backdrop; scenery and non-scenery alternate |
| `weight` | Relative pick chance (default 1) |

- The function runs once per play and returns the frames. `Math.random`, `c.R` and `c.pick` vary each play.
- No globals: `require`, `process`, `setTimeout`, `Date`, `eval` and similar are rejected.
- At most 5000 bytes per file.

## Stage

```
 col 0                                            col W-1
row 0  ....................................................   sky (rows 0-3)
row 1  ....................................................
row 2  ....................................................
row 3  ....................................................
row 4   ▐▛███▛█                                              Clawd's rows (G..G+2), G = 4
row 5  ▝▜██████▀
row 6   ▝▝   ▝▝                                              ground (his feet)
```

- The stage is `c.W` columns by `c.H` (7) rows; anything outside is clipped. `c.W` is the band's width, from about 60 to 250 columns.
- Clawd is 9x3 (`c.SW`, `c.SH`). Frame `x` is his left column: 0..`c.mx` (`W-9`), or -9..W while entering or leaving.
- At `offset` 0 his top row is `c.G`. Negative offsets (-1..-4) lift him into the sky; +1..+3 sink him and clip his feet (crouching, hiding in a hole).

### Sprite

```
col: 012345678
row0  ▐▛███▛█▄    cols 0-1 left arm, cols 2-7 eyes, col 8 right hand ("▄" when raised)
row1 ▝▜██████▘    cols 0-1 and 7-8 arms
row2  ▝▝   ▝▝     cols 1-2 left foot, cols 6-7 right foot
```

| Spot | Cell |
|---|---|
| Raised right hand (`one-up`, `up`) | (x+8, G+offset). A balloon string rises from (x+8, G-1); a sign pole stands at x+9. |
| Raised left hand (`up`) | (x+0..1, G+offset) |
| Head top | (x+4, G-1+offset). Hats go on row G-1. |
| Eyes | row G, cols x+2..x+7 (glasses go here) |

## Frames

Each frame describes the whole stage; only Clawd's `x` carries over.

| Key | Meaning |
|---|---|
| `pose` | `"default"`, `"arms-up"`, `"look-left"`, `"look-right"`, `c.P(eyes, arms, feet)`, or `{facing: F}` |
| `x` | Clawd's column (integer). Omitted: he stays put. Move 1-2 columns per frame unless he is hidden. |
| `offset` | Rows up (negative) or down (positive), integer -7..3 |
| `ms` | How long the frame shows, 20..3000 (default 60). Fast action 30-50, holds 200-800. |
| `color` | Clawd's body colour |
| `paint` | `function (col, row) { return color }` per sprite cell (col 0-8, row 0-2) |
| `hide` | `true`: Clawd isn't drawn |
| `props` | Text props, below |
| `actors` | More Clawds: `{x, offset, pose, color, paint, hide, front}`. `front: true` draws over the main one. |
| `poof`, `shadow` | `"dot"` / `"wave"` puffs while offset > 0; `"wide"` / `"narrow"` shadow |

| Pose part | Values |
|---|---|
| eyes | `open` `left` `right` `closed` `wink` |
| arms | `down` `up` (both raised) `one-up` (right hand raised) |
| feet | `both` `left` `right` (one foot lifted) |
| facing, in turning order | `right-12` `right-30` `right-55` `right-75` `edge` `back-105` `back-125` `back-150` `back` `left-75` `left-55` `left-30` `left-12` |

### Props

`{x, y, t, c, bg, b, z, o}`: one line of text `t` at column `x`, row `y` (integers).

| Key | Meaning |
|---|---|
| `t` | Text. Spaces are transparent unless `o: 1`. |
| `c`, `bg` | Foreground and background colour |
| `z` | `-1` draws behind the Clawds (default: in front) |
| `o` | `1` makes spaces paint over what's behind |
| `b` | `1` for bold |

Single-width characters only: ASCII, Latin-1, arrows, box drawing (`─│┌┐└┘├┤┬┴┼╭╮╯╰═║`), blocks (`█▓▒░▀▄▌▐▖▗▘▝▙▛▜▟`), geometric shapes (`●○◆◇■□▲△▼▽◢◣◤◥`), Braille, and symbols such as `★☆♥♦♣♠♪♫☀☁☂☼✦✧❄✿❀✓✗•·°`. No emoji and no combining marks.

### Colours

- Theme names, drawn in Claude Code's dark-theme colours: `text`, `inactive`, `subtle`, `claude`, `clawd_body`, `permission`, `suggestion`, `success`, `error`, `warning`, `chromeYellow`, `professionalBlue`, `fastMode`, `autoAccept`, `rainbow_red` ... `rainbow_violet` (each with a `_shimmer` variant). `src/core.js` lists them all.
- Exact colours: `"rgb(r,g,b)"` or `"#rrggbb"`, also from `c.rgb` and `c.hsv`.
- The terminal is usually dark: avoid near-black, and use `text` for neutral things.

## Context `c`

| Member | |
|---|---|
| `c.W`, `c.H`, `c.G`, `c.SW`, `c.SH`, `c.mx` | Stage width, 7, 4, 9, 3, last column Clawd fits at (`W-9`) |
| `c.x` | Clawd's column when the animation starts |
| `c.P(eyes, arms, feet)` | Pose (defaults `open`, `down`, `both`) |
| `c.F(n, frame)` | `n` copies of a frame |
| `c.T(x, y, text, color, extra)` | One prop; `extra` merges in, e.g. `{z: -1}` |
| `c.art(x, y, lines, color, extra)` | Multi-line art (array or `\n`-separated) as props |
| `c.walk(from, to, opts)` | Walking frames ending in `"default"` at `to`. opts: `moon`, `ms` (per step, 50), `turn` (look frames first, 3), `arms`, `fx(frame, x, i)` to add props per step |
| `c.R(a, b)`, `c.pick(arr)`, `c.clamp(v, a, b)`, `c.lerp(a, b, t)` | Random int, random item, clamp, lerp |
| `c.rgb(r, g, b)`, `c.hsv(h, s, v)`, `c.rainbow(i)` | Colour strings |
| `c.cat(a, b, ...)` | Concatenated frame arrays |
| `c.tile(pattern, y, color, shift, extra)` | One prop repeating `pattern` across row `y`; raise `shift` per frame to scroll it |
| `c.rng(seed)` | Seeded random function, for a backdrop that comes out the same every frame |

## Scenery

A scenery animation (`scene: 1`) puts a backdrop across the whole width.

- Generate it so it fills any width: `c.tile` for repeating rows (waves, fences, rails, grass), loops placing objects every N columns, `c.rng(seed)` for irregular but stable placement. Never a fixed-width picture.
- Build the static parts once (`var bg = [...]`) and add them to every frame (`props: bg.concat(fg)`), with `z: -1` so the Clawds stand in front.
- Animate something in it: drifting clouds, twinkling stars, swaying trees, flickering windows, scrolling layers.
- Let it appear during the first second and clear away during the last, so the stage ends empty.
- Travel scenes (train, car, flight): Clawd stays put while layers scroll past at different `shift` speeds.

## Rules

`node tools/sim.js check` enforces these.

1. Start where `c.x` is. Walk somewhere first when you need room: `var x = c.clamp(c.x, 0, c.mx - 30); f = f.concat(c.walk(c.x, x));`
2. Work at every width from `meta.w` up: place things relative to `x`, `c.W` and `c.mx`.
3. Last 2.5-40 s in total; 8-20 s is typical.
4. End with Clawd on stage, visible, at offset 0, and no props or actors left.
5. Integers for `x`, `y` and `offset`; valid poses and colours; `props` and `actors` as arrays.

## Tips

- Story beats: setup, build-up, climax, reaction, cleanup.
- Anticipation and follow-through: crouch (`offset: 1`) before a jump, a hold before the punchline.
- Eyes sell it: look at the thing, flinch (`closed`), `wink` when pleased, `arms-up` to celebrate.
- Vary `ms`, add particles (`*✦·`, confetti, smoke `░▒`, motion lines `≡ ~`) and a little randomness.

## Tools

```
node tools/sim.js check anims/<id>.js
node tools/sim.js check all
node tools/sim.js preview anims/<id>.js --W 80 --x 0 --every 2
node tools/sim.js preview anims/<id>.js --W 140 --x 60 --from 40 --to 90 --ansi
node tools/build.js
```

`preview` prints the frames as text and folds identical neighbours. `examples/hello-sign.js` is a complete small example: a sign held in the hand, a friend walking in, a joint hop, and cleanup.
