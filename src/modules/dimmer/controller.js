import Controller from '../controller'

export default class DimmerController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.dimmer(...args)
  }

  module(...args) {
    return this.selection.dimmer(...args)
  }

  async import() {
    if (!window.dimmer) await import('../../../semantic/dist/components/dimmer')
  }

  addContent(element) {
    this.module('add content', element)
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

  setOpacity(opacity) {
    this.module('set opacity', opacity)
  }

  create() {
    this.module('create')
  }

  getDuration() {
    return this.module('get duration')
  }

  getDimmer() {
    return this.module('get dimmer')
  }

  hasDimmer() {
    return this.module('has dimmer')
  }

  isActive() {
    return this.module('is active')
  }

  isAnimating() {
    return this.module('is animating')
  }

  isDimmer() {
    return this.module('is dimmer')
  }

  isDimmable() {
    return this.module('is dimmable')
  }

  isDisabled() {
    return this.module('is disabled')
  }

  isEnabled() {
    return this.module('is enabled')
  }

  isPage() {
    return this.module('is page')
  }

  isPageDimmer() {
    return this.module('isPageDimmer')
  }

  setActive() {
    this.module('set active')
  }

  setDimmable() {
    this.module('set dimmable')
  }

  setDimmed() {
    this.module('set dimmed')
  }

  setPageDimmer() {
    this.module('setPageDimmer')
  }

  setDisabled() {
    this.module('set disabled')
  }
}
