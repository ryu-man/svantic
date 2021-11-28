import { SvelteComponentTyped } from 'svelte/internal'
import {Module} from '../utils'
import CheckboxSettings from './settings'
import type { MountEvent } from '../../common'

declare type Type = 'radio' | 'slider' | 'toggle'
declare type State = 'read-only' | 'checked' | 'disabled'

interface CheckboxProps extends Module<CheckboxSettings> {
  id?: string
  name?: string
  type?: Type
  state?: State
  fitted?: boolean
  inverted?: boolean
}
/**
 * @description Svantic Checkbox
 */
declare class Checkbox extends SvelteComponentTyped<CheckboxProps> {
  /**
   * @description 	Switches a checkbox from current state
   */
  toggle(): void

  /**
   * @description 	Set a checkbox state to checked
   */
  check(): void

  /**
   * @description 	Set a checkbox state to unchecked
   */
  uncheck(): void

  /**
   * @description 	Set as indeterminate checkbox
   */
  indeterminate(): void

  /**
   * @description 	Set as determinate checkbox
   */
  determinate(): void

  /**
   * @description 	Enable interaction with a checkbox
   */
  enable(): void

  /**
   * @description 	Set a checkbox state to checked without callbacks
   */
  setChecked(): void

  /**
   * @description 	Set a checkbox state to unchecked without callbacks
   */
  setUnchecked(): void

  /**
   * @description 	Set as indeterminate checkbox without callbacks
   */
  setIndeterminate(): void

  /**
   * @description 	Set as determinate checkbox without callbacks
   */
  setDeterminate(): void

  /**
   * @description 	Enable interaction with a checkbox without callbacks
   */
  setEnabled(): void

  /**
   * @description 	Disable interaction with a checkbox without callbacks
   */
  setDisabled(): void

  /**
   * @description 	Attach checkbox events to another element
   */
  attachEvents(selector, behavior): void

  /**
   * @description 	Returns whether element is radio selection
   */
  isRadio(): Promise<boolean>

  /**
   * @description 	Returns whether element is currently checked
   */
  isChecked(): Promise<boolean>

  /**
   * @description 	Returns whether element is not checked
   */
  isUnchecked(): Promise<boolean>

  /**
   * @description 	Returns whether element is able to be changed
   */
  canChange(): Promise<boolean>

  /**
   * @description 	Returns whether element can be checked (checking if already checked or `beforeChecked` would cancel)
   */
  shouldAllowCheck(): Promise<boolean>

  /**
   * @description 	Returns whether element can be unchecked (checking if already unchecked or `beforeUnchecked` would cancel)
   */
  shouldAllowUncheck(): Promise<boolean>

  /**
   * @description 	Returns whether element can be determinate (checking if already determinate or `beforeDeterminate` would cancel)
   */
  shouldAllowDeterminate(): Promise<boolean>

  /**
   * @description 	Returns whether element can be indeterminate (checking if already indeterminate or `beforeIndeterminate` would cancel)
   */
  shouldAllowIndeterminate(): Promise<boolean>

  /**
   * @description 	Returns whether element is able to be unchecked
   */
  canUncheck(): Promise<boolean>

  ready(): Promise<void>
}
export default Checkbox
