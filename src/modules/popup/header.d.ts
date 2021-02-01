import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';

interface HeaderProps {
    class?: string;
    style?: Style;
}
/**
 * Svantic Popup
 */
declare class Header extends SvelteComponentTyped<HeaderProps> {
}
export default Header;
