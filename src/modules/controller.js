export default class Controller {
  constructor(target, settings) {
    this.settings = settings
    this.target = target
  }

  setSettings(settings) {
    this.settings = settings
    return this
  }

  destroy() {
    this.module('destroy')
  }
}
