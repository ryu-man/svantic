import { SvelteComponentTyped} from 'svelte/internal';
import type { Size } from '../../variations';
import type { SharedProps } from '../../shared_props';
interface ImagesProps extends SharedProps {
    size?: Size;
}
/**
 * Vomantic Images
 */
declare class Images extends SvelteComponentTyped<ImagesProps> {
}
export default Images;
