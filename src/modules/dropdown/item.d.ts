import type { Component } from 'src/component'
import type { Icons } from 'src/elements/icon/icon'
import { SvelteComponentTyped } from 'svelte/internal'
import type { Loading, Attach, Size, Speed, Wide } from '../../variations'
import { Module } from '../module'
import Controller from './controller'
import { DropdownSettings } from './settings'

export interface DropdownMenuItemProps extends Component {
  value?: string
  content?: string
  description?: string
  disabled?: boolean
  flag?: string
  icon?: Icons
  image?: boolean
  label?: boolean
  selected?: boolean
  onClick: (event: EventTarget, data: object) => void
}
/**
 * Svantic Dropdown Menu
 */
declare class DropdownMenuItem extends SvelteComponentTyped<DropdownMenuItemProps> {}
export default DropdownMenuItem
