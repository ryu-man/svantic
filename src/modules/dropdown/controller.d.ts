import type { DropdownSettings } from './settings'
import Controller from '../controller'

type DropdownBehavior =
  | 'setup menu'
  | 'change values '
  | 'refresh'
  | 'toggle'
  | 'show'
  | 'hide'
  | 'clear '
  | 'hide others'
  | 'restore defaults '
  | 'restore default text'
  | 'restore placeholder text'
  | 'restore default value'
  | 'save defaults'
  | 'set selected'
  | 'remove selected'
  | 'set selected'
  | 'set exactly'
  | 'set text'
  | 'set value '
  | 'get text'
  | 'get value'
  | 'get item'
  | 'bind touch events'
  | 'bind mouse events'
  | 'bind intent'
  | 'unbind intent'
  | 'determine eventInModule'
  | 'determine select action'
  | 'set active'
  | 'set visible'
  | 'remove active'
  | 'remove visible'
  | 'is selection'
  | 'is animated'
  | 'is visible'
  | 'is hidden'
  | 'get default text'
  | 'get placeholder text'
export default class DropdownController extends Controller<
  DropdownBehavior,
  DropdownSettings
> {
  jQuery: any
  target: HTMLElement
  settings: DropdownSettings
  selection: any
  constructor(target?: HTMLElement)
  init(): this
  setSettings(settings: DropdownSettings): this
  /**
   *@description 	Recreates dropdown menu from passed values. values should be an object with the following structure: { values: [ {value, text, name} ] }.
   */
  setupMenu(values: any[]): void
  /**
   *@description 	Changes dropdown to use new values
   */
  changeValues(values: any[]): void
  /**
   *@description 	Refreshes all cached selectors and data
   */
  refresh(): void
  /**
   *@description 	Toggles current visibility of dropdown
   */
  toggle(): void
  /**
   *@description 	Shows dropdown. If a function is provided to callback, it's called after the dropdown-menu is shown. Set preventFocus to true if you don't want the dropdown field to focus after the menu is shown
   */
  show(callback: () => any, preventFocus: boolean): void
  /**
   *@description 	Hides dropdown. If a function is provided to callback, it's called after the dropdown-menu is hidden. Set preventBlur to true if you don't want the dropdown field to blur after the menu is hidden
   */
  hide(callback: () => any, preventBlur: boolean): void
  /**
   *@description 	Clears dropdown of selection. Set preventChangeTrigger to true to omit the change event (default: false).
   */
  clear(preventChangeTrigger: boolean): void
  /**
   *@description 	Hides all other dropdowns that is not current dropdown
   */
  hideOthers(): void
  /**
   *@description 	Restores dropdown text and value to its value on page load. Set preventChangeTrigger to true to omit the change event (default: false).
   */
  restoreDefaults(preventChangeTrigger: boolean): void
  /**
   *@description 	Restores dropdown text to its value on page load
   */
  restoreDefaultText(): void
  /**
   *@description 	Restores dropdown text to its prompt, placeholder text
   */
  restorePlaceholderText(): void
  /**
   *@description 	Restores dropdown value to its value on page load
   */
  restoreDefaultValue(): void
  /**
   *@description 	Saves current text and value as new defaults (for use with restore)
   */
  saveDefaults(): void
  /**
   *@description 	Sets value as selected or Adds a group of values as selected
   */
  setSelected(...args: any[]): void
  /**
   *@description 	Remove value from selected
   */
  removeSelected(value: any): void
  /**
   *@description 	Adds a group of values as selected
   */
  setSelected([value1, value2]): void
  /**
   *@description 	Sets selected values to exactly specified values, removing current selection
   */
  setExactly(...args: any[]): void
  /**
   *@description 	Sets dropdown text to a value
   */
  setText(text: string): void
  /**
   *@description 	Sets dropdown input to value (does not update display state). text and $selected are used internally and can be ignored. Set preventChangeTrigger to true to omit the change event
   */
  setValue(
    value: any,
    text: any,
    $selected: any,
    preventChangeTrigger: boolean
  ): void
  /**
   *@description 	Returns current dropdown text
   */
  getText(): string
  /**
   *@description 	Returns current dropdown input value
   */
  getValue(): any
  /**
   *@description 	Returns DOM element that matches a given input value
   */
  getItem(value: any): HTMLElement
  /**
   *@description 	Adds touch events to element
   */
  bindTouchEvents(): void
  /**
   *@description 	Adds mouse events to element
   */
  bindMouseEvents(): void
  /**
   *@description 	Binds a click to document to determine if you click away from a dropdown
   */
  bindIntent(): void
  /**
   *@description 	Unbinds document intent click
   */
  unbindIntent(): void
  /**
   *@description 	Returns whether event occurred inside dropdown
   */
  determineEventInModule(): void
  /**
   *@description 	Triggers preset item selection action based on settings passing text/value
   */
  determineSelectAction(text: string, value: any): void
  /**
   *@description 	Sets dropdown to active state
   */
  setActive(): void
  /**
   *@description 	Sets dropdown to visible state
   */
  setVisible(): void
  /**
   *@description 	Removes dropdown active state
   */
  removeActive(): void
  /**
   *@description 	Removes dropdown visible state
   */
  removeVisible(): void
  /**
   *@description 	Returns whether dropdown is a selection dropdown
   */
  isSelection(): boolean
  /**
   *@description 	Returns whether dropdown is animated
   */
  isAnimated(): boolean
  /**
   *@description 	Returns whether dropdown is visible
   */
  isVisible(): boolean
  /**
   *@description 	Returns whether dropdown is hidden
   */
  isHidden(): boolean
  /**
   *@description 	Returns dropdown value as set on page load
   */
  getDefaultText(): string
  /**
   *@description 	Returns placeholder text
   */
  getPlaceholderText(): string
  customBehavior(behavior: string, ...args: any[]): any
}
