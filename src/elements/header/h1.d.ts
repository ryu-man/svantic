import { SvelteComponentTyped} from 'svelte/internal';
import { Component } from '../../component';

interface H1Props extends Component {
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
declare class H1 extends SvelteComponentTyped<H1Props> {
    
}
export default H1;
