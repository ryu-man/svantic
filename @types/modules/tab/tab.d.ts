import { SvelteComponentTyped} from 'svelte/internal';
import { SharedProps } from '../../shared_props';

interface TabProps extends SharedProps {
    attached: string;
    active: boolean;
    segment: boolean;
    tab: string;
}
/**
 * Vomantic Tab
 */
export default class Tab extends SvelteComponentTyped<TabProps> {}
