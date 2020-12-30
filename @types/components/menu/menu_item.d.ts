import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
interface MenuProps extends SharedProps {
    active?: boolean;
    horizontally?: boolean;
    fitted?: boolean;
}
/**
 * Sveltic Menu
 */
declare class Menu extends SvelteComponentTyped<MenuProps> {
}
export default Menu;
