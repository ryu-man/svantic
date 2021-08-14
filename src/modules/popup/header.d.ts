import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';

interface HeaderProps {
    class?: string;
    style?: Style;
}
/**
 * @description SVantic PopupHeader
 */
declare class Header extends SvelteComponentTyped<HeaderProps> {
}
export default Header;
