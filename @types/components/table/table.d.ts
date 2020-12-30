import { SvelteComponentTyped} from 'svelte/internal';
import { SharedProps } from '../../shared_props';
interface TableProps extends SharedProps {
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
 * Sveltic Table
 */
declare class Table extends SvelteComponentTyped<TableProps> {
}
export default Table;
