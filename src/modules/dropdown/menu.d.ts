import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from 'src/component'
import type { Float } from '../../variations'

export interface DropdownMenuProps extends Component {
  direction?: Float
  open?: boolean
  scrolling?: boolean
}
/**
 * Svantic Dropdown Menu
 */
declare class DropdownMenu extends SvelteComponentTyped<DropdownMenuProps> {}
export default DropdownMenu
