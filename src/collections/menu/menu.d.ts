import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
import type { Size } from '../../elements/type';
import type { Float, Wide } from '../../variations';
import Item from './item'

declare type Type = 'secondary' | 'pointing' | 'tabular' | 'text' | 'vertical' | 'pagination';
interface MenuProps extends Component {
    wide?: Wide;
    size?: Size;
    attached?: Float;
    floated?: Float
    item?: boolean;
    fluid?: boolean;
    compact?: boolean;
    fixed?: boolean;
    stackable?: boolean;
    inverted?: boolean;
    icon?: boolean;
    labeled?: boolean;
    borderless?: boolean;
    accordion?: boolean;
    secondary?: boolean
    pointing?: boolean
    tabular?: boolean
    text?: boolean
    vertical?: boolean
    pagination?: boolean
}
/**
 * @description 
 */
declare class Menu extends SvelteComponentTyped<MenuProps> {
    static item: new ()=> Item
}
export default Menu;
