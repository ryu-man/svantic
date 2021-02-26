import Controller from '../controller'

export default class ProgressController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.progress(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.progress(...args)
  }

  async import() {
    if (!window.progress)
      await import('../../../semantic/dist/components/progress.min')
  }

  setPercent(percent) {
    this.module('set percent', percent)
  }

  setProgress(value) {
    this.module('set progress', value)
  }

  increment(incrementValue) {
    this.module('increment', incrementValue)
  }

  decrement(decrementValue) {
    this.module('decrement', decrementValue)
  }

  updateProgress(value) {
    this.module('update progress', value)
  }

  complete(keepState) {
    this.module('complete', keepState)
  }

  reset() {
    this.module('reset')
  }

  setTotal(total) {
    this.module('set total', total)
  }

  async getText(text) {
    return await this.module('get text', text)
  }

  getNormalizedValue(value) {
    return this.module('get normalized', value)
  }

  getPercent() {
    return this.module('get percent')
  }

  getValue() {
    return this.module('get value')
  }

  getTotal() {
    return this.module('get total')
  }

  isComplete() {
    return this.module('is complete')
  }

  isSuccess() {
    return this.module('is success')
  }

  isWarning() {
    return this.module('is warning')
  }

  isError() {
    return this.module('is error')
  }

  isActive() {
    return this.module('is active')
  }

  setActive() {
    this.module('set active')
  }

  setWarning(text, keepState) {
    this.module('set warning', text, keepState)
  }

  setSuccess(text, keepState) {
    this.module('set success', text, keepState)
  }

  setError(text, keepState) {
    this.module('set error', text, keepState)
  }

  setDuration(value) {
    this.module('set duration', value)
  }

  setLabel(text) {
    this.module('set label', text)
  }

  setBarLabel(text) {
    this.module('set bar', text)
  }

  removeActive() {
    this.module('remove active')
  }

  removeWarning() {
    this.module('remove warning')
  }

  removeSuccess() {
    this.module('remove success')
  }

  removeError() {
    this.module('remove error')
  }
}
