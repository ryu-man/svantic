import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Size, Color } from '../../variations';
interface LabelsProps extends SharedProps {
    size?: Size;
    color?: Color;
    basic?: boolean;
    tag?: boolean;
    circular?: boolean;
    inverted?: boolean;
}
/**
 * Vomantic Labels
 */
declare class Labels extends SvelteComponentTyped<LabelsProps> {
}
export default Labels;
