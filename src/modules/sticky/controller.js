import Controller from '../controller'

export default class SticyController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.sticky(...args)
  }

  async module(...args) {
    return await this.selection.sticky(...args)
  }
  
  async import() {
    if (!window.sticky) await import('../../../semantic/dist/components/sticky')
  }
}
