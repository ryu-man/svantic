import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
import { Wide } from '../../variations';

interface StatisticProps extends SharedProps {
    class?: string;
    style?:Style
    columns?:Wide
}
/**
 * Sveltic Statistics
 */
declare class Statistics extends SvelteComponentTyped<StatisticProps> {
}
export default Statistics;
