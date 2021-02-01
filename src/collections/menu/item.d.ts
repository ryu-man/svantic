import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';

interface ItemProps extends Component {
    active?: boolean;
    horizontally?: boolean;
    fitted?: boolean;
    href?: string
}
/**
 * @description 
 */
declare class Item extends SvelteComponentTyped<ItemProps> {
}
export default Item;
