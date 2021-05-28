// flow-typed signature: b4286558f71666e64fe83b011af9a4f5
// flow-typed version: c6154227d1/shortid_v2.2.x/flow_>=v0.25.x <=v0.103.x

declare module 'shortid' {
  declare type ShortIdModule = {|
    (): string,
    generate(): string,
    seed(seed: number): ShortIdModule,
    worker(workerId: number): ShortIdModule,
    characters(characters: string): string,
    decode(id: string): { version: number, worker: number },
    isValid(id: mixed): boolean,
  |};
  declare module.exports: ShortIdModule;
};
