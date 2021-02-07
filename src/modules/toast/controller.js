import Controller from '../controller'

export default class ToastController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.toast(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.toast(...args)
  }

  async import() {
    if (!window.toast) await import('../../../semantic/dist/components/toast')
  }

  animatePause() {
    this.module('animate pause')
  }

  animateContinue() {
    this.module('animate continue')
  }

  close() {
    this.module('close')
  }

  getToasts() {
    return this.module('get toasts')
  }

  getRemainingTime() {
    return this.module('get remainingTime')
  }
}
