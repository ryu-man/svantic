import { SvelteComponentTyped} from 'svelte/internal';
import Tab from './tab.svellte';
import Module from '../module';
import TabularMenuSettings from './settings'

interface TabularMenuProps extends Module<TabularMenuSettings> {
    attached?: string;
    loading?: boolean;
    segment?: boolean;
    active?: boolean;
}
/**
 * Vomantic TabularMenu
 */
export default class TabularMenu extends SvelteComponentTyped<TabularMenuProps> {
    static Tab: new ()=> Tab
}
