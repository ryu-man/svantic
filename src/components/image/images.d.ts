import { SvelteComponentTyped} from 'svelte/internal';
import type { Size } from '../../variations';
import type { Component } from '../../component';
interface ImagesProps extends Component {
    size?: Size;
}
/**
 * Vomantic Images
 */
declare class Images extends SvelteComponentTyped<ImagesProps> {
}
export default Images;
