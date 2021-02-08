import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Component } from '../../component';
import { Wide } from '../../variations';

interface StatisticProps extends Component {
    column?:Wide
}
/**
 * Vomantic Statistics
 */
declare class Statistics extends SvelteComponentTyped<StatisticProps> {
}
export default Statistics;
