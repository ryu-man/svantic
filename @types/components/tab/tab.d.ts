import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
interface TabProps extends SharedProps {
    class?: string;
    style?: Style;
    attached: string;
    active: boolean;
    segment: boolean;
    tab: string;
}
/**
 * Sveltic Tab
 */
declare class Tab extends SvelteComponentTyped<TabProps> {
}
export default Tab;
