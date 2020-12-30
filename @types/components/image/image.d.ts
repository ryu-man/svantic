import { SvelteComponentTyped} from 'svelte/internal';
import { Align, Float, Size } from '../../variations';
import { SharedProps } from '../../shared_props';
interface ImageProps extends SharedProps {
    aligned?: Align;
    floated?: Float;
    size?: Size;
    src?: string;
    alt?: string;
    hidden?: boolean;
    disabled?: boolean;
    avatar?: boolean;
    bordered?: boolean;
    fluid?: boolean;
    round?: boolean;
    circular?: boolean;
    middle?: boolean;
    centered?: boolean;
    space?: boolean;
}
/**
 * Sveltic Image
 */
declare class Image extends SvelteComponentTyped<ImageProps> {
}
export default Image;
