import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';

interface ItemProps extends Component {
    active?: boolean;
    horizontally?: boolean;
    fitted?: boolean;
}
/**
 * Vomantic Menu Item
 */
declare class Item extends SvelteComponentTyped<ItemProps> {
}
export default Item;
