import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
import Item from './item';
import Tab from './tab';

interface TabularMenuProps extends SharedProps {
    class?: string;
    style?: Style;
    attached?: string;
    loading?: boolean;
    segment?: boolean;
    active?: boolean;
}
/**
 * Vomantic TabularMenu
 */
export default class TabularMenu extends SvelteComponentTyped<TabularMenuProps> {
    static Item: new ()=> Item
    static Tab: new ()=> Tab
}
