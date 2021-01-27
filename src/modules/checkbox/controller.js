import Controller from '../controller'

export default class CheckboxController extends Controller {
  /**
   *@description 	Switches a checkbox from current state
   */
  toggle() {
    return this.customBehavior('toggle')
  }

  /**
   *@description 	Set a checkbox state to checked
   */
  check() {
    return this.customBehavior('check')
  }

  /**
   *@description 	Set a checkbox state to unchecked
   */
  uncheck() {
    return this.customBehavior('uncheck')
  }

  /**
   *@description 	Set as indeterminate checkbox
   */
  indeterminate() {
    return this.customBehavior('indeterminate')
  }

  /**
   *@description 	Set as determinate checkbox
   */
  determinate() {
    return this.customBehavior('determinate')
  }

  /**
   *@description 	Enable interaction with a checkbox
   */
  enable() {
    return this.customBehavior('enable')
  }

  /**
   *@description 	Set a checkbox state to checked without callbacks
   */
  setChecked() {
    return this.customBehavior('set checked')
  }

  /**
   *@description 	Set a checkbox state to unchecked without callbacks
   */
  setUnchecked() {
    return this.customBehavior('set unchecked')
  }

  /**
   *@description 	Set as indeterminate checkbox without callbacks
   */
  setIndeterminate() {
    return this.customBehavior('set indeterminate')
  }

  /**
   *@description 	Set as determinate checkbox without callbacks
   */
  setDeterminate() {
    return this.customBehavior('set determinate')
  }

  /**
   *@description 	Enable interaction with a checkbox without callbacks
   */
  setEnabled() {
    return this.customBehavior('set enabled')
  }

  /**
   *@description 	Disable interaction with a checkbox without callbacks
   */
  setDisabled() {
    return this.customBehavior('set disabled')
  }

  /**
   *@description 	Attach checkbox events to another element
   */
  attachEvents(selector, behavior) {
    return this.customBehavior('attach events', selector, behavior)
  }

  /**
   *@description 	Returns whether element is radio selection
   */
  isRadio() {
    return this.customBehavior('is radio')
  }

  /**
   *@description 	Returns whether element is currently checked
   */
  isChecked() {
    return this.customBehavior('is checked')
  }

  /**
   *@description 	Returns whether element is not checked
   */
  isUnchecked() {
    return this.customBehavior('is unchecked')
  }

  /**
   *@description 	Returns whether element is able to be changed
   */
  canChange() {
    return this.customBehavior('can change')
  }

  /**
   *@description 	Returns whether element can be checked (checking if already checked or `beforeChecked` would cancel)
   */
  shouldAllowCheck() {
    return this.customBehavior('should allow check')
  }

  /**
   *@description 	Returns whether element can be unchecked (checking if already unchecked or `beforeUnchecked` would cancel)
   */
  shouldAllowUncheck() {
    return this.customBehavior('should allow uncheck')
  }

  /**
   *@description 	Returns whether element can be determinate (checking if already determinate or `beforeDeterminate` would cancel)
   */
  shouldAllowDeterminate() {
    return this.customBehavior('should allow determinate')
  }

  /**
   *@description 	Returns whether element can be indeterminate (checking if already indeterminate or `beforeIndeterminate` would cancel)
   */
  shouldAllowIndeterminate() {
    return this.customBehavior('should allow indeterminate')
  }

  /**
   *@description 	Returns whether element is able to be unchecked
   */
  canUncheck() {
    return this.customBehavior('can uncheck')
  }
}
