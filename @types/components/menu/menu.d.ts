import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Size } from '../type';
import type { Float, Wide } from '../../variations';
declare type Type = 'secondary' | 'pointing' | 'tabular' | 'text' | 'vertical' | 'pagination';
interface MenuProps extends SharedProps {
    type?: Type;
    wide?: Wide;
    size?: Size;
    attached?: Float;
    fluid?: boolean;
    compact?: boolean;
    fixed?: boolean;
    stackable?: boolean;
    inverted?: boolean;
    icon?: boolean;
    labeled?: boolean;
    borderless?: boolean;
}
/**
 * Vomantic Menu
 */
declare class Menu extends SvelteComponentTyped<MenuProps> {
}
export default Menu;
