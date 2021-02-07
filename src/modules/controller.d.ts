declare class Controller<B = any, S = {}> {
  jQuery: JQueryStatic
  target: HTMLElement
  settings: S
  selection: JQuery
  ready: Promise<void>

  constructor(target: HTMLElement, settings: S)

  setSettings(settings: S): this

  module(behavior: B, ...args: any[]): void | Promise<any>
  module(settings: S): any

  moduleSync(behavior: B, ...args: any[]): void | any
  moduleSync(settings: S): any

  destroy(): void
}

export default Controller
