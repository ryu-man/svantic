import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';

declare type Type = 'raised' | 'piled' | 'vertical' | 'horizontal stackable' | 'horizontal ';

interface SegmentsProps extends SharedProps {
    type?: Type;
}
/**
 * Sveltic Segments
 */
export default  class Segments extends SvelteComponentTyped<SegmentsProps> {
}
