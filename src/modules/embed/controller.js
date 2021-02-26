import Controller from '../controller'

export default class EmbedController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.embed(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.embed(...args)
  }

  async import() {
    if (!window.embed) await import('../../../semantic/dist/components/embed.min')
  }

  change(source, id, url) {
    this.module('change', source, id, url)
  }

  reset() {
    this.module('reset')
  }

  show() {
    this.module('show')
  }

  hide() {
    this.module('hide')
  }

  getId() {
    return this.module('get id')
  }

  getPlaceholder() {
    return this.module('get placeholder')
  }

  getSources() {
    return this.module('get sources')
  }

  getType() {
    return this.module('get type')
  }

  getUrl() {
    return this.module('get url')
  }

  hasPlaceholder() {
    return this.module('has placeholder')
  }
}
