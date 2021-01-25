import { SharedProps } from '../../shared_props';
import { SvelteComponentTyped} from 'svelte';

interface LineProps extends SharedProps {
    short ?: boolean
    medium ?: boolean
    full ?: boolean
    long ?: boolean
    very ?: boolean
    fluid ?: boolean
}
/**
 * Vomantic Placeholder Line
 */
export default class Line extends SvelteComponentTyped<LineProps> {}
