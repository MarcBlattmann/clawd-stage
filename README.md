# clawd-stage

A Claude Code mod: Clawd moves into a band above the prompt and plays 200 animations with props, friends and full-width scenery.

<img width="2876" height="396" alt="Screenshot_2026-10-06_14-02-15" src="https://github.com/user-attachments/assets/ee3b8e36-8486-4358-9977-d4ed1484b6af" />

## Install

In Claude Code:

```
/plugin install clawd-stage --marketplace MarcBlattmann/clawd-stage
```

Answer `y` to add the marketplace, then pick a scope.

Requires Claude Code 2.1.291 or newer, in a terminal. Mods are early access in Claude Code and may change between releases.

## Use

| Command | |
|---|---|
| `/clawd` | Hide or show the stage |
| `/clawd <id>` | Play one animation now, e.g. `/clawd surf-wave` |

The stage takes 7 rows above the prompt and hides itself when the band has fewer.

## Animations

200 files in `anims/`, the ids being the file names.

| Kind | Count | Examples |
|---|---|---|
| Full-width scenery | 50 | `train-journey`, `city-lights`, `surf-wave`, `northern-lights`, `platformer-level` |
| Everything else | 150 | `balloon-pump-pop`, `western-duel`, `snowball-fight`, `dj-booth`, `zipline` |

Scenery and non-scenery animations alternate. [docs/ANIMATIONS.md](docs/ANIMATIONS.md) describes how to write one.

## Development

Node.js 18 or newer.

| Task | Command |
|---|---|
| Run Claude Code with the mod from this folder | `claude --plugin-dir .` |
| Rebuild `hooks/engine.js` after editing `src/` or `anims/` | `node tools/build.js` |
| Check every animation | `node tools/sim.js check all` |
| Preview one as text | `node tools/sim.js preview anims/surf-wave.js --W 100` |
| Validate the plugin | `claude plugin validate .` |
| Run the tests | `claude plugin test .` |

`hooks/engine.js` is generated but committed, because an install runs the repository as it is.

| Path | |
|---|---|
| `hooks/register.tsx` | The band, the frame timer and `/clawd` |
| `hooks/draw.ts` | Turns a frame into Raster cells |
| `hooks/engine.js` | Built from `src/` and `anims/` |
| `src/core.js` | Animation registry, helpers and scheduler |
| `src/sprite.js` | Clawd's sprite glyphs and the colour palette |
| `anims/` | One file per animation |
| `tools/` | `build.js` and `sim.js` |
| `tests/` | Cases for `claude plugin test` |

## License

[MIT](LICENSE). Clawd is Anthropic's mascot; this is an unofficial fan mod, not affiliated with Anthropic.
