import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'

interface FooterProps extends Component {
    fullWidth?:boolean
}
/**
 * @description 
 */
declare class Footer extends SvelteComponentTyped<FooterProps> {}
export default Footer