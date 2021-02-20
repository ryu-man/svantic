import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from 'src/component'
import type { Icons } from 'src/elements/icon/icon'

export interface DropdownHeaderProps extends Component {
  icon?: Icons
}
/**
 * Svantic Dropdown Header
 */
declare class DropdownHeader extends SvelteComponentTyped<DropdownHeaderProps> {}
export default DropdownHeader
