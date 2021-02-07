export default class Controller {
  constructor(target, settings) {
    this.settings = settings
    this.target = target
    this.ready = this.init()
  }

  moduleSync(...args) {}

  async module(...args) {}

  async import() {}

  async init() {
    if (!window['$'] || !window['jQuery']) {
      this.jQuery = window.jQuery = (await import('jquery')).default
    } else {
      this.jQuery = window['jQuery']
    }
    await this.import()
    this.selection = jQuery(this.target)
    console.log('init')
    this.moduleSync(this.settings)
  }

  setSettings(settings) {
    this.settings = settings
    this.ready.then(() => {
      this.module(settings)
    })
    return this
  }

  destroy() {
    this.module('destroy')
  }
}
