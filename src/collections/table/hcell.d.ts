import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'

interface HCellProps extends Component {
    sorted?: "ascending" | "descending"
}
/**
 * @description 
 */
declare class HCell extends SvelteComponentTyped<HCellProps> {}
export default HCell