import { SvelteComponentTyped} from 'svelte/internal';
import { Component } from '../../component';
interface TableProps extends Component {
    type?: string;
    column?: string;
    line?: boolean;
    basic?: boolean;
    fixed?: boolean;
    celled?: boolean;
    padded?: boolean;
    single?: boolean;
    compact?: boolean;
    striped?: boolean;
    sortable?: boolean;
    inverted?: boolean;
    veryBasic?: boolean;
    selectable?: boolean;
    collapsing?: boolean;
    unstackable?: boolean;
}
/**
 * Vomantic Table
 */
declare class Table extends SvelteComponentTyped<TableProps> {
}
export default Table;
