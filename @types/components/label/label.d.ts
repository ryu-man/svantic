import { SvelteComponentTyped} from 'svelte/internal';
import type { Attach, Align, Color, Size } from '../../variations';
import type { SharedProps } from '../../shared_props';
declare type Type = 'ribbon' | 'tag' | 'right corner' | 'left corner' | 'pointing' | 'left pointing' | 'right pointing' | 'below pointing' | 'image' | 'horizontal' | 'floating' | 'left floating' | 'bottom floating';
interface LabelProps extends SharedProps {
    type?: Type;
    attached?: Attach;
    floating?: Attach;
    aligned?: Align;
    color?: Color;
    size?: Size;
    basic?: boolean;
    inverted?: boolean;
    horizontal?: boolean;
    circular?: boolean;
}
/**
 * Sveltic Label
 */
declare class Label extends SvelteComponentTyped<LabelProps> {
}
export default Label;
