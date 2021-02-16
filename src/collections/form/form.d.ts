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
 * Vomantic Form
 */
declare class Form extends SvelteComponentTyped<FormProps> {
    static field: new()=> Field
    static fields: new()=> Fields
}
export default Form;
