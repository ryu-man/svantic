import type { Component } from '../../component'
import { SvelteComponentTyped } from 'svelte/internal'
import type { MountEvent } from '../../common'

export interface DropdownMenuItemProps extends Component {
  value?: string
  text?: string
  disabled?: boolean
  image?: boolean
  label?: boolean
  selected?: boolean
  active?: boolean
}
/**
 * @description Svantic DropdownMenuItem
 */
declare class DropdownMenuItem extends SvelteComponentTyped<
  DropdownMenuItemProps,
  {
    click: CustomEvent
  }
> {}
export default DropdownMenuItem
