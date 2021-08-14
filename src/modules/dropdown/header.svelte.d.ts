import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from '../../component'
import type { Icons } from '../../elements/icon/icon'

export interface DropdownHeaderProps extends Component {
  icon?: Icons
}
/**
 * @description Svantic DropdownHeader
 */
declare class DropdownHeader extends SvelteComponentTyped<DropdownHeaderProps> {}
export default DropdownHeader
