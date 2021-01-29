import { CheckboxSettings } from './settings'
import Controller from '../controller'

type CheckboxBehavior =
  | 'toggle'
  | 'check'
  | 'uncheck'
  | 'indeterminate'
  | 'determinate'
  | 'enable'
  | 'set checked'
  | 'set unchecked'
  | 'set indeterminate'
  | 'set determinate'
  | 'set enabled'
  | 'set disabled'
  | 'attach events'
  | 'is radio'
  | 'is checked'
  | 'is unchecked'
  | 'can change'
  | 'should allow check'
  | 'should allow uncheck'
  | 'should allow determinate'
  | 'should allow indeterminate'
  | 'can uncheck'

export default class CheckboxController extends Controller<
  CheckboxBehavior,
  CheckboxSettings
> {
  /**
   *@description 	Switches a checkbox from current state
   */
  toggle(): void

  /**
   *@description 	Set a checkbox state to checked
   */
  check(): void

  /**
   *@description 	Set a checkbox state to unchecked
   */
  uncheck(): void

  /**
   *@description 	Set as indeterminate checkbox
   */
  indeterminate(): void

  /**
   *@description 	Set as determinate checkbox
   */
  determinate(): void

  /**
   *@description 	Enable interaction with a checkbox
   */
  enable(): void

  /**
   *@description 	Set a checkbox state to checked without callbacks
   */
  setChecked(): void

  /**
   *@description 	Set a checkbox state to unchecked without callbacks
   */
  setUnchecked(): void

  /**
   *@description 	Set as indeterminate checkbox without callbacks
   */
  setIndeterminate(): void

  /**
   *@description 	Set as determinate checkbox without callbacks
   */
  setDeterminate(): void

  /**
   *@description 	Enable interaction with a checkbox without callbacks
   */
  setEnabled(): void

  /**
   *@description 	Disable interaction with a checkbox without callbacks
   */
  setDisabled(): void

  /**
   *@description 	Attach checkbox events to another element
   */
  attachEvents(selector, behavior): void

  /**
   *@description 	Returns whether element is radio selection
   */
  isRadio(): boolean

  /**
   *@description 	Returns whether element is currently checked
   */
  isChecked(): boolean

  /**
   *@description 	Returns whether element is not checked
   */
  isUnchecked(): boolean

  /**
   *@description 	Returns whether element is able to be changed
   */
  canChange(): boolean

  /**
   *@description 	Returns whether element can be checked (checking if already checked or `beforeChecked` would cancel)
   */
  shouldAllowCheck(): boolean

  /**
   *@description 	Returns whether element can be unchecked (checking if already unchecked or `beforeUnchecked` would cancel)
   */
  shouldAllowUncheck(): boolean

  /**
   *@description 	Returns whether element can be determinate (checking if already determinate or `beforeDeterminate` would cancel)
   */
  shouldAllowDeterminate(): boolean

  /**
   *@description 	Returns whether element can be indeterminate (checking if already indeterminate or `beforeIndeterminate` would cancel)
   */
  shouldAllowIndeterminate(): boolean

  /**
   *@description 	Returns whether element is able to be unchecked
   */
  canUncheck(): boolean
}
