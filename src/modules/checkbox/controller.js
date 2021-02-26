import Controller from '../controller'

export default class CheckboxController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.checkbox(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.checkbox(...args)
  }

  async import() {
    if (!window.checkbox)
      await import('../../../semantic/dist/components/checkbox.min')
  }

  toggle() {
    this.module('toggle')
  }

  check() {
    this.module('check')
  }

  uncheck() {
    this.module('uncheck')
  }

  indeterminate() {
    this.module('indeterminate')
  }

  determinate() {
    this.module('determinate')
  }

  enable() {
    this.module('enable')
  }

  setChecked() {
    return this.module('set checked')
  }

  setUnchecked() {
    this.module('set unchecked')
  }

  setIndeterminate() {
    this.module('set indeterminate')
  }

  setDeterminate() {
    this.module('set determinate')
  }

  setEnabled() {
    this.module('set enabled')
  }

  setDisabled() {
    this.module('set disabled')
  }

  attachEvents(selector, behavior) {
    this.module('attach events', selector, behavior)
  }

  isRadio() {
    return this.module('is radio')
  }

  isChecked() {
    return this.module('is checked')
  }

  isUnchecked() {
    return this.module('is unchecked')
  }

  canChange() {
    return this.module('can change')
  }

  shouldAllowCheck() {
    return this.module('should allow check')
  }

  shouldAllowUncheck() {
    return this.module('should allow uncheck')
  }

  shouldAllowDeterminate() {
    return this.module('should allow determinate')
  }

  shouldAllowIndeterminate() {
    return this.module('should allow indeterminate')
  }

  canUncheck() {
    return this.module('can uncheck')
  }
}
