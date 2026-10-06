export type ClawdStageVisibility = boolean

declare module 'claude-code' {
  interface PluginState {
    'clawd-stage': { isHidden: ClawdStageVisibility }
  }
}
