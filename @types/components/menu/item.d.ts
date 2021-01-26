import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';

interface ItemProps extends SharedProps {
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
