import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Component } from '../../component';
interface ListProps extends Component {
    class?: string;
    fluid?: boolean;
    circular?: boolean;
    loading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    compact?: boolean;
    basic?: boolean;
    toggle?: boolean;
    positive?: boolean;
    negative?: boolean;
    tertiary?: boolean;
    inverted?: boolean;
    icon?: boolean;
    style?: Style;
}
/**
 * Svantic List
 */
declare class List extends SvelteComponentTyped<ListProps> {
}
export default List;
