import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
interface TabularMenuItemProps extends SharedProps {
    class?: string;
    style?: Style;
}
/**
 * Vomantic TabularMenuItem
 */
declare class TabularMenuItem extends SvelteComponentTyped<TabularMenuItemProps> {
}
export default TabularMenuItem;
