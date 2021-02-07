import Controller from '../controller'

export default class SidebarController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.sidebar(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.sidebar(...args)
  }

  async import() {
    if (!window.sidebar)
      await import('../../../semantic/dist/components/sidebar')
  }

  attachEvents(selector, event) {
    this.module('attach events', selector, event)
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

  isVisible() {
    return this.module('is visible')
  }

  isHidden() {
    return this.module('is hidden')
  }

  pushPage() {
    this.module('push page')
  }

  getDirection() {
    return this.module('get direction')
  }

  pullPage() {
    this.module('pull page')
  }

  addBodyCSS() {
    this.module('add body CSS')
  }

  removeBodyCSS() {
    this.module('remove body CSS')
  }

  getTransitionEvent() {
    return this.module('get transition event')
  }
}
