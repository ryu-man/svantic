import { SvelteComponentTyped} from 'svelte/internal';
import { Component } from '../../component';

interface H3Props extends Component {
    class?: string;
    active?: boolean;
    disabled?: boolean;
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
 * @description 
 */
declare class H3 extends SvelteComponentTyped<H3Props> {
    
}
export default H3;
