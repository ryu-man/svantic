import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Component } from '../../component';
import { Wide } from '../../variations';

interface StatisticProps extends Component {
    class?: string;
    style?:Style
    columns?:Wide
}
/**
 * Svantic Statistics
 */
declare class Statistics extends SvelteComponentTyped<StatisticProps> {
}
export default Statistics;
