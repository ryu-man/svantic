import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from '../../component'
import type { Float } from '../../variations'
import type { MountEvent } from '../../common'

export interface DropdownMenuProps extends Component {
  direction?: Float
  open?: boolean
  scrolling?: boolean
}
/**
 * @description Svantic DropdownMenu
 */
declare class DropdownMenu extends SvelteComponentTyped<DropdownMenuProps> {}
export default DropdownMenu
