import Controller from '../controller'

export default class PopupController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }
  
  moduleSync(...args) {
    return this.selection.popup(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.popup(...args)
  }

  async import() {
    if (!window.popup) await import('../../../semantic/dist/components/popup.min')
  }

  show() {
    this.module('show')
  }

  hide() {
    this.module('hide')
  }

  hideAll() {
    this.module('hide all')
  }

  getPopup() {
    this.module('get popup')
  }

  changeContent(html) {
    this.module('change content', html)
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

  exists() {
    this.module('exists')
  }

  reposition() {
    this.module('reposition')
  }

  setPosition(position) {
    this.module('set position', position)
  }

  removePopup() {
    this.module('remove popup')
  }
}
