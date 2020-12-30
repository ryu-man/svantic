import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
interface TabularMenuProps extends SharedProps {
    class?: string;
    style?: Style;
    attached?: string;
    loading?: boolean;
    segment?: boolean;
    active?: boolean;
}
/**
 * Sveltic TabularMenu
 */
declare class TabularMenu extends SvelteComponentTyped<TabularMenuProps> {
}
export default TabularMenu;
