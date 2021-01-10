import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
interface RangeProps extends SharedProps {
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
 * Vomantic Range
 */
declare class Range extends SvelteComponentTyped<RangeProps> {
}
export default Range;
