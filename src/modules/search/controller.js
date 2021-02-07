import Controller from '../controller'
export default class SearchController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }
  moduleSync(...args) {
    return this.selection.search(...args)
  }
  async module(...args) {
    await this.ready
    return this.selection.search(...args)
  }
  async import() {
    if (!window.search) await import('../../../semantic/dist/components/search')
  }

  query(callback) {
    this.module('query ', callback)
  }

  displayMessage(text, type) {
    this.module('display message', text, type)
  }

  searchLocal(query) {
    return this.module('search local', query)
  }

  async hasMinimumCharacters() {
    return await this.module('has minimum')
  }

  searchRemote(query, callback) {
    return this.module('search remote', query, callback)
  }

  searchObject(query, object, searchFields) {
    return this.module('search object', query, object, searchFields)
  }

  cancelQuery() {
    this.module('cancel query')
  }

  isFocused() {
    return this.module('is focused')
  }

  isVisible() {
    return this.module('is visible')
  }

  isEmpty() {
    return this.module('is empty')
  }

  getValue() {
    return this.module('get value')
  }

  getResult(value) {
    return this.module('get result', value)
  }

  setValue(value) {
    this.module('set value', value)
  }

  readCache(query) {
    return this.module('read cache', query)
  }

  clearCache(query) {
    this.module('clear cache', query)
  }

  writeCache(query) {
    this.module('write cache', query)
  }

  addResults(html) {
    this.module('add results', html)
  }

  showResults(callback) {
    this.module('show results', callback)
  }

  hideResults(callback) {
    this.module('hide results', callback)
  }

  generateResults(response) {
    this.module('generate results', response)
  }
}
