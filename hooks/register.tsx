// Clawd's stage as a band above the prompt: a 7-row Raster repainted with $.ui.blit on every
// animation frame. The animations and the scheduler live in hooks/engine.js, which
// tools/build.js builds from src/ and anims/.
import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import { $cdH, $cdInt, $cdL, $cdMs, $cdNext, $cdPlay } from './engine.js'
import type { CdFrame, CdState } from './engine.js'
import { compose, encode, refused } from './draw'

const isHidden = atom({ plugin: 'clawd-stage', key: 'isHidden' } as const, false)

const REST: CdFrame = { pose: 'default', offset: 0 }
const KEY = 'stage'

// Short dances between animations.
function moves(): Record<string, CdFrame[]> {
  const P = (eyes: string, arms = 'down', feet = 'both') => ({ eyes, arms, feet })
  const F = (pose: unknown, n: number, offset = 0): CdFrame[] => Array.from({ length: n }, () => ({ pose, offset }))
  const R = (q: CdFrame[], n: number): CdFrame[] => Array.from({ length: n }, () => q).flat()
  const pop: CdFrame[] = [{ pose: 'default', offset: 1, poof: 'dot' }, { pose: 'default', offset: 1, poof: 'wave' }]
  return {
    shuffle: [...R([...F(P('left', 'up', 'left'), 2), ...F(P('right', 'up', 'right'), 2)], 4), REST],
    wave: [...R([...F(P('open', 'one-up'), 3), ...F(P('open', 'down'), 3)], 3), ...F(P('wink', 'one-up'), 5), REST],
    headbang: [...R([...F(P('closed', 'up'), 2, 1), ...F(P('closed', 'up'), 2)], 5), REST],
    roof: [...R([...F(P('open', 'up'), 2), ...F(P('open', 'down'), 2, 1)], 4), ...pop, REST],
    disco: [...R([...F(P('right', 'one-up', 'right'), 3), ...F(P('left', 'down', 'left'), 3)], 3), REST],
    jacks: [...R([...F(P('open', 'up'), 2), ...F(P('closed', 'down'), 2, 1)], 4), ...pop, REST],
  }
}

// Module state: a reload starts the stage over.
const st: CdState = { x: 0, seq: [], i: 0, hist: [], moves: moves() }
let frame: CdFrame = REST
let width = 0
let site: string | undefined
let hidden = false

async function paint($: EngineInterface) {
  if (!site || !width) return
  const { deny } = await $.ui.blit({ requestId: site, key: KEY, cells: encode(compose(frame, width)), columns: width, rows: $cdH })
  if (!deny) return
  // A glyph the surface won't draw: remember it, draw `*` instead, and redraw the band.
  const cell = /\b(?:cell|index)\D{0,12}(\d+)/i.exec(deny)
  if (cell) {
    const cp = compose(frame, width)[Number(cell[1]) * 3]
    if (cp !== undefined && cp !== 0x20) refused.add(cp)
  }
  site = undefined
  $.ui.invalidate('ui.render')
}

function tick($: EngineInterface) {
  let delay = 250
  if (!hidden && width > 0) {
    if (st.i >= st.seq.length) {
      st.seq = $cdNext(st, width) || []
      st.i = 0
    }
    const f = st.seq[st.i++] ?? REST
    if (f.x !== undefined) st.x = $cdInt(f.x, st.x)
    frame = { ...f, x: st.x }
    delay = $cdMs(f.ms)
    void paint($)
  }
  $.clock.after(delay, () => tick($))
}

export const register: Register = (on) => {
  on('session.start', async ($, e, next) => {
    hidden = await read($, isHidden)
    await $.command.register({
      name: 'clawd',
      description: 'Show or hide Clawd above the prompt, or play one animation',
      argumentHint: '[animation]',
    })
    tick($)
    return next(e)
  })

  on('command.run', { command: 'clawd' }, async ($, e) => {
    const id = e.args.trim()
    if (!id) {
      hidden = !hidden
      await update($, isHidden, () => hidden)
      return { text: hidden ? 'Clawd hidden' : 'Clawd shown' }
    }
    const anim = $cdL.find((a) => a.id === id)
    if (!anim) return { text: `No animation "${id}" (${$cdL.length} available)` }
    if (hidden) {
      hidden = false
      await update($, isHidden, () => false)
    }
    st.seq = $cdPlay(st, Math.max(width, 80), anim)
    st.i = 0
    return { text: `Playing ${anim.meta.title ?? id}` }
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    if (e.surface !== 'terminal' || e.props.hasSurvey || e.props.maxRows < $cdH || (await read($, isHidden))) {
      site = undefined
      return next(e)
    }
    const { Box, Raster } = $.ui.resolve(e)
    width = Math.max(20, Math.min(512, e.props.bodyColumns))
    site = e.requestId
    const below = await next(e)
    return (
      <Box flexDirection="column">
        <Raster key={KEY} columns={width} rows={$cdH} cells={encode(compose(frame, width))} />
        {below}
      </Box>
    )
  })
}
