import { Component } from '../../component';
import { SvelteComponentTyped} from 'svelte';

interface HeaderProps extends Component {
    inverted?: boolean;
}
/**
 * Vomantic Placeholder Header
 */
declare class Header extends SvelteComponentTyped<HeaderProps> {}
export default Header;
