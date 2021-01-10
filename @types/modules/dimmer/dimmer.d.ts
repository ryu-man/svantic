import { SvelteComponentTyped} from 'svelte/internal';
import type { Align } from '../../variations';
import type { SharedProps } from '../../shared_props';

declare type Type = 'content' | 'page';
declare type State = 'active' | 'disabled';
declare type Shade = 'medium' | 'light' | 'very light';
declare type Partial = 'bottom' | 'center' | 'top';

interface DimmerProps extends SharedProps {
    type?: Type;
    state?: State;
    aligned?: Align;
    shades?: Shade;
    partial?: Partial;
    inverted?: boolean;
    onMount?: (controller: any) => void;
}
/**
 * Vomantic Dimmer
 */
declare class Dimmer extends SvelteComponentTyped<DimmerProps> {
}
export default Dimmer;
