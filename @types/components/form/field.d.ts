import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Wide } from '../../variations';
import { Component } from '../../component';
declare type State = 'info' | 'warning' | 'error' | 'success' | 'disabled';
interface FieldProps extends Component {
    class?: string;
    style?: Style;
    state?: State;
    wide?: Wide;
    inline?: boolean;
    disabled?: boolean;
    required?: boolean;
}
/**
 * Vomantic Field
 */
declare class Field extends SvelteComponentTyped<FieldProps> {
}
export default Field;
