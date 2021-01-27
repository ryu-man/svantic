declare class Controller<B = any, S = {}> {
  jQuery: any
  target: HTMLElement
  settings: S
  selection: any
  constructor(target: HTMLElement)
  init(): this
  setSettings(settings: S): this

  customBehavior(behavior: B, ...args: any[]): any
}

export default Controller
