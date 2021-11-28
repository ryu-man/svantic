import type { SvelteComponentTyped } from 'svelte/internal'
import type { Loading, Attach, Size, Speed, Wide } from '../../variations'

import type { Module } from '../utils'
import type Settings from './settings'

import type Header from './header.svelte'
import type Menu from './menu.svelte'
import type Item from './item.svelte'
import type Divider from './divider.svelte'
import type Text from './text.svelte'

import type { MountEvent } from '../../common'

// declare type Type =
//   | 'selection'
//   | 'search'
//   | 'clearable'
//   | 'multiple'
//   | 'floating'
//   | 'labeled'
//   | 'icon'
//   | 'labeled icon'
//   | 'button'
//   | 'inline'
//   | 'pointing'
//   | 'simple'
//   | ''

declare type Height = 'long' | 'very long'

export interface DropdownProps extends Module<Settings> {
  selection?: boolean
  search?: boolean
  clearable?: boolean
  multiple?: boolean
  floating?: boolean
  labeled?: boolean
  icon?: boolean
  button?: boolean
  inline?: boolean
  pointing?: boolean
  simple?: boolean
  size?: Size
  column?: Wide
  active?: boolean
  disabled?: boolean
  loading?: boolean
  error?: boolean
  speed?: Speed
  height?: Height
  menuDirection?: Attach
  loaderStyle?: Loading
  link?: boolean
  item?: boolean
  long?: boolean
  basic?: boolean
  fluid?: boolean
  label?: boolean
  toggle?: boolean
  primary?: boolean
  compact?: boolean
  circular?: boolean
  positive?: boolean
  negative?: boolean
  tertiary?: boolean
  inverted?: boolean
  secondary?: boolean
  scrolling?: boolean
}

type DropdownEvents = MountEvent<HTMLDivElement | HTMLSelectElement>

/**
 * @description Svantic Dropdown
 */
declare class Dropdown extends SvelteComponentTyped<
  DropdownProps,
  DropdownEvents
> {
  static Select: new () => Dropdown
  static Header: new () => Header
  static Divider: new () => Divider
  static Menu: new () => Menu
  static Item: new () => Item
  static Text: new () => Text

  mounted(callback: () => void): void

  setSettings(settings: Settings): this

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
  getText(): Promise<string>

  /**
   *@description 	Returns current dropdown input value
   */
  getValue(): Promise<any>

  /**
   *@description 	Returns DOM element that matches a given input value
   */
  getItem(value: any): Promise<HTMLElement>

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
  isSelection(): Promise<boolean>

  /**
   *@description 	Returns whether dropdown is animated
   */
  isAnimated(): Promise<boolean>

  /**
   *@description 	Returns whether dropdown is visible
   */
  isVisible(): Promise<boolean>

  /**
   *@description 	Returns whether dropdown is hidden
   */
  isHidden(): Promise<boolean>

  /**
   *@description 	Returns dropdown value as set on page load
   */
  getDefaultText(): Promise<string>

  /**
   *@description 	Returns placeholder text
   */
  getPlaceholderText(): Promise<string>

  ready(): Promise<void>
}

export default Dropdown
