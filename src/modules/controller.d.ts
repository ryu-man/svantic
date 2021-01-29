declare class Controller<B = any, S = {}> {
  jQuery: JQuery
  target: HTMLElement
  settings: S
  selection: any
  
  constructor(target: HTMLElement, settings:S)

  init(): this
  setSettings(settings: S): this

  customBehavior(behavior: B, ...args: any[]): any
}

export default Controller
