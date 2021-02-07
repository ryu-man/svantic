import type { Icons } from 'src/elements/icon/icon';
import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';

interface ItemProps extends Component {
    active?: boolean;
    horizontally?: boolean;
    fitted?: boolean;
    icon?: boolean | Icons;
    href?: string
    content?: string
}
/**
 * @description 
 */
declare class Item extends SvelteComponentTyped<ItemProps> {
    
}
export default Item;
