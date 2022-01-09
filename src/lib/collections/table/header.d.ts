import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'

interface HeaderProps extends Component {
    fullWidth?:boolean
}
/**
 * @description 
 */
declare class Header extends SvelteComponentTyped<HeaderProps> {
}
export default Header