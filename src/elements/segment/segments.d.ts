import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';

declare type Type = 'raised' | 'piled' | 'vertical' | 'horizontal stackable' | 'horizontal';

interface SegmentsProps extends Component {
    type?: Type;
}
/**
 * Svantic Segments
 */
export default  class Segments extends SvelteComponentTyped<SegmentsProps> {
}
