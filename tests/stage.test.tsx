import { expect, test } from 'claude-code/testing'
import type { On } from 'claude-code'

// Nothing stands beneath a plugin in a test: answer the band and the command as the engine would.
function engine(on: On) {
  on('ui.render', ($, e) => {
    const { Box } = $.ui.resolve(e)
    return <Box />
  })
  on('command.run', () => ({ text: '' }))
}
const ORIGIN = { origin: { kind: 'composer' }, presentation: { isFullscreen: true, columns: 100 } } as const

const BAND = {
  plugin: 'clawd-stage',
  surface: 'terminal',
  component: 'AbovePrompt',
  props: { hasSurvey: false, isWorking: false, maxRows: 12, bodyColumns: 100, scroll: { offset: 0, bodyRows: 12 }, view: {} },
} as const

test('draws the stage as a 7-row raster across the band', async ($, on) => {
  engine(on)
  const band = await $.ui.mount(BAND)
  const stage = await band.find({ key: 'stage' })
  expect(stage?.type).toBe('Raster')
  expect(stage?.props.columns).toBe(100)
  expect(stage?.props.rows).toBe(7)
  expect(typeof stage?.props.cells).toBe('string')
})

test('leaves the band alone when it is too short', async ($, on) => {
  engine(on)
  const band = await $.ui.mount({ ...BAND, props: { ...BAND.props, maxRows: 4 } })
  expect(await band.find({ key: 'stage' })).toBeUndefined()
})

test('/clawd hides and shows him, /clawd <id> plays one', async ($, on) => {
  engine(on)
  const band = await $.ui.mount(BAND)
  expect((await $.command.run({ command: 'clawd', args: '', ...ORIGIN })).text).toBe('Clawd hidden')
  expect(await band.find({ key: 'stage' })).toBeUndefined()
  expect((await $.command.run({ command: 'clawd', args: '', ...ORIGIN })).text).toBe('Clawd shown')
  expect((await band.find({ key: 'stage' }))?.type).toBe('Raster')
  expect((await $.command.run({ command: 'clawd', args: 'surf-wave', ...ORIGIN })).text).toBe("Playing Surf's up")
  expect((await $.command.run({ command: 'clawd', args: 'nope', ...ORIGIN })).text).toContain('No animation "nope"')
})
