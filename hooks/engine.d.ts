// Types for hooks/engine.js, the module tools/build.js builds from src/ and anims/.
export type CdAnim = { id: string; meta: { title?: string; w?: number; scene?: number | boolean; weight?: number }; fn: (c: unknown) => unknown };
export type CdFrame = { pose?: unknown; x?: number; offset?: number; ms?: number; color?: string; paint?: (col: number, row: number) => unknown; hide?: boolean; poof?: string; shadow?: string; props?: unknown[]; actors?: CdActor[] };
export type CdActor = { x?: number; offset?: number; pose?: unknown; color?: string; paint?: (col: number, row: number) => unknown; hide?: boolean; front?: boolean };
export type CdState = { x: number; seq: CdFrame[]; i: number; hist: string[]; moves: Record<string, CdFrame[]>; scene?: boolean };
export type CdRun = { x: number; y: number; t: string; c?: string; bg?: string; b: boolean };
export type CdPoseObj = { eyes: string; arms: string; feet: string } | { facing: string };
export declare const $cdL: CdAnim[];
export declare function $cdNext(st: CdState, W: number): CdFrame[];
export declare function $cdPick(st: CdState, W: number): CdAnim | undefined;
export declare function $cdPlay(st: CdState, W: number, a: CdAnim | undefined): CdFrame[];
export declare function $cdRuns(p: unknown, W: number, H: number): CdRun[];
export declare function $cdPose(p: unknown): string | CdPoseObj;
export declare function $cdCol(c: unknown): string | undefined;
export declare function $cdInt(v: unknown, d: number): number;
export declare function $cdMs(ms: unknown): number;
export declare function $cdIdle(n: number): CdFrame[];
export declare const $cdH: number;
export declare const $cdG: number;
export declare const $cdSprite: {
  poses: Record<string, { eyes: string; arms: string; feet: string }>;
  arms: Record<string, { r1L: string; r1R: string; r2L: string; r2R: string }>;
  eyes: Record<string, { glyphs: string; lid?: boolean }[]>;
  feet: Record<string, string>;
  facing: Record<string, { glyphs: string; from: number; to: number }[]>;
};
export declare const $cdPalette: Record<string, number>;
