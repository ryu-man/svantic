import { SvelteComponentTyped } from 'svelte/internal'
import type { SharedProps } from '../../shared_props'
import type { Animation, Attach, Size, Speed, Wide } from '../../variations'
import { Module } from '../module'
import Controller from './controller'
import {DropdownSettings} from './settings'

declare type Type =
  | 'selection'
  | 'search'
  | 'clearable'
  | 'multiple'
  | 'floating'
  | 'labeled'
  | 'icon'
  | 'labeled icon'
  | 'button'
  | 'inline'
  | 'pointing'
  | 'simple'
  | ''

declare type State = 'active' | 'disabled' | 'loading' | 'error'
declare type Height = 'long' | 'very long'

interface DropdownProps extends SharedProps,Module<Controller, DropdownSettings> {
  size?: Size
  column?: Wide
  state?: State
  speed?: Speed
  height?: Height
  type?: Type | Type[]
  menuDirection?: Attach
  loaderStyle?: Animation
  icon?: boolean
  link?: boolean
  item?: boolean
  long?: boolean
  basic?: boolean
  fluid?: boolean
  label?: boolean
  toggle?: boolean
  loading?: boolean
  primary?: boolean
  compact?: boolean
  circular?: boolean
  positive?: boolean
  negative?: boolean
  tertiary?: boolean
  inverted?: boolean
  secondary?: boolean
  scrolling?: boolean
  element?: 'div' | 'select'
}
/**
 * Vomantic Dropdown
 */
declare class Dropdown extends SvelteComponentTyped<DropdownProps> {}
export default Dropdown
