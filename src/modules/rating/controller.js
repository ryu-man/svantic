import Controller from '../controller'

export default class ProgressController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.rating(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.rating(...args)
  }

  async import() {
    if (!window.rating) await import('../../../semantic/dist/components/rating')
  }

  setRating(rating) {
    return this.module('set rating', rating)
  }

  getRating() {
    return this.module('get rating')
  }

  disable() {
    return this.module('disable')
  }

  enable() {
    return this.module('enable')
  }

  clearRating() {
    return this.module('close rating')
  }
}
