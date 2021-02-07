import Controller from '../controller'

export default class TabularController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.tab(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.tab(...args)
  }

  async import() {
    if (!window.tab) await import('../../..disttab')
  }

  attachEvents(selector, event) {
    return this.module('attach events', selector, event)
  }
  
  changeTab(path) {
    return this.module('change tab', path)
  }

  setState(path) {
    return this.module('set path', path)
  }

  
  async getPath() {
    return await this.module('get path')
  }
  
  async isTab() {
    return await this.module('is tab')
  }

  cacheRead(path) {
    return this.module('cache read', path)
  }
  
  cacheAdd(path, html) {
    return this.module('cache add', path, html)
  }
  
  cacheRemove(path) {
    return this.module('cache remove', path)
  }
}
