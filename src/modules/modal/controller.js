import Controller from '../controller'
export default class ModalController extends Controller {
  constructor(target, settings) {
    super(target, settings)
    window.mc = this
  }

  moduleSync(...args) {
    return this.selection.modal(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.modal(...args)
  }

  async import() {
    if (!window.transition)
      await import('../../../semantic/dist/components/transition')
    if (!window.dimmer) await import('../../../semantic/dist/components/dimmer')
    if (!window.modal) await import('../../../semantic/dist/components/modal')
  }

  show() {
    this.module('show')
  }

  hide() {
    this.module('hide')
  }

  toggle() {
    this.module('toggle')
  }

  refresh() {
    this.module('refresh')
  }

  showDimmer() {
    this.module('show dimmer')
  }

  hideDimmer() {
    this.module('hide dimmer')
  }

  hideOthers() {
    this.module('hide others')
  }

  hideAll() {
    this.module('hide all')
  }

  cacheSizes() {
    this.module('cache sizes')
  }

  canFit() {
    return this.module('can fit')
  }
  
  isActive() {
    return this.module('is active')
  }

  setActive() {
    this.module('set active')
  }
}
