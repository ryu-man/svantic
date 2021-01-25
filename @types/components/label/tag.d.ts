import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Size, Color } from '../../variations';

interface TagProps extends SharedProps {
    size?: Size;
    color?: Color;
    basic?: boolean;
    tag?: boolean;
    circular?: boolean;
    inverted?: boolean;
}
/**
 * Vomantic Label Tag
 */
export default class Tag extends SvelteComponentTyped<TagProps> {
}
