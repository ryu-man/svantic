import { SvelteComponentTyped} from 'svelte/internal';
import { Float, Align, Attach, Color } from '../../variations';
import { Component } from '../../component';
declare type Type = 'raised' | 'placeholder' | 'stacked' | 'piled' | 'vertical';
declare type State = 'loading' | 'disabled';
declare type Emphasis = 'secondary' | 'tertiary';
interface SegmentProps extends Component {
    type?: Type;
    state?: State;
    floated?: Float;
    attached?: Attach;
    aligned?: Align;
    color?: Color;
    emphasis?: Emphasis;
    tall?: boolean;
    double?: boolean;
    inverted?: boolean;
    padded?: boolean;
    fitted?: boolean;
    compact?: boolean;
    circular?: boolean;
    clearing?: boolean;
    basic?: boolean;
    blurring?: boolean;
    dimmed?: boolean;
    container ?:boolean
    vertical ?: boolean
}
/**
 * Vomantic Segment
 */
declare class Segment extends SvelteComponentTyped<SegmentProps> {
}
export default Segment;
