import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Size } from '../../variations';
import { Component } from '../../component';
import Field from './field'
import Fields from './fields'
declare type State = 'info' | 'warning' | 'error' | 'success' | 'loading';
interface FormProps extends Component {
    class?: string;
    style?: Style;
    state?: State;
    size?: Size;
    inverted?: boolean;
    equal?: boolean;
}
/**
 * Svantic Form
 */
declare class Form extends SvelteComponentTyped<FormProps> {
    static Field: new()=> Field
    static Fields: new()=> Fields
}
export default Form;
