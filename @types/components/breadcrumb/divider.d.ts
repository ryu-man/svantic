import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';
import type { SharedProps } from '../../shared_props'

interface DividerProps extends SharedProps {
    class?: string;
    style?: Style;
}
/**
 * Vomantic Divider
 */
export default class Divider extends SvelteComponentTyped<DividerProps> {}
