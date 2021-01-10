import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Wide } from '../../variations';
import { SharedProps } from '../../shared_props';
declare type State = 'info' | 'warning' | 'error' | 'success' | 'disabled';
interface FieldProps extends SharedProps {
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
