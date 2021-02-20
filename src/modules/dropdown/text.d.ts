import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from 'src/component'
import type { Icons } from 'src/elements/icon/icon'

export interface DropdownTextProps extends Component {
  icon?: Icons
}
/**
 * Svantic Dropdown Text
 */
declare class DropdownText extends SvelteComponentTyped<DropdownTextProps> {}
export default DropdownText
