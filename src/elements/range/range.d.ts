import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
interface RangeProps extends Component {
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
}
/**
 * Svantic Range
 */
declare class Range extends SvelteComponentTyped<RangeProps> {
}
export default Range;
