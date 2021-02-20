import { SvelteComponentTyped } from 'svelte/internal'
import type { Loading, Attach, Size, Speed, Wide } from '../../variations'
import { Module } from '../module'
import Controller from './controller'
import { DropdownSettings } from './settings'

import Header from './header'
import Menu from './menu'
import Item from './item'
import Divider from './divider'
import Text from './text'
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

export interface DropdownProps extends Module<Controller, DropdownSettings> {
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
  icon?: boolean
  link?: boolean
  item?: boolean
  long?: boolean
  basic?: boolean
  fluid?: boolean
  label?: boolean
  toggle?: boolean
  loading?: Loading
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
/**
 * Svantic Dropdown
 */
declare class Dropdown extends SvelteComponentTyped<DropdownProps> {
  static select: new () => Dropdown
  static header: new () => Header
  static divider: new () => Divider
  static menu: new () => Menu
  static item: new () => Item
  static text: new () => Text
}
export default Dropdown
