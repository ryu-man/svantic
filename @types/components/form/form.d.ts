import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Size } from '../../variations';
import { SharedProps } from '../../shared_props';
declare type State = 'info' | 'warning' | 'error' | 'success' | 'loading';
interface FormProps extends SharedProps {
    class?: string;
    style?: Style;
    state?: State;
    size?: Size;
    inverted?: boolean;
    equal?: boolean;
}
/**
 * Sveltic Form
 */
declare class Form extends SvelteComponentTyped<FormProps> {
}
export default Form;
