import Controller from '../controller'

export default class AccordionController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.accordion(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.accordion(...args)
  }

  async import() {
    if (!window.accordion)
      await import('../../../semantic/dist/components/accordion')
  }

  refresh() {
    this.module('refresh')
  }

  open(index) {
    this.module('open', index)
  }

  closeOthers() {
    this.module('close others')
  }

  close(index) {
    this.module('close', index)
  }

  toggle(index) {
    this.module('toggle', index)
  }
}
