import { SharedProps } from '../../shared_props';
import { SvelteComponentTyped} from 'svelte';

interface HeaderProps extends SharedProps {
    inverted?: boolean;
}
/**
 * Vomantic Placeholder Header
 */
declare class Header extends SvelteComponentTyped<HeaderProps> {}
export default Header;
