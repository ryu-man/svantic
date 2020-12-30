import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
import { SvelteComponentTyped} from 'svelte';

interface PlaceholderImageProps extends SharedProps {
    inverted?: boolean;
}
/**
 * Sveltic Placeholder Image
 */
declare class PlaceholderImage extends SvelteComponentTyped<PlaceholderImageProps> {}
export default PlaceholderImage;
