import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
import type { Size, Color } from '../../variations';

interface TagProps extends Component {
    size?: Size;
    color?: Color;
    basic?: boolean;
    tag?: boolean;
    circular?: boolean;
    inverted?: boolean;
}
/**
 * Svantic Label Tag
 */
export default class Tag extends SvelteComponentTyped<TagProps> {
}
