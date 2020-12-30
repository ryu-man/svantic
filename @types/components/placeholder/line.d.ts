import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
import { SvelteComponentTyped} from 'svelte';

interface PlaceholderLineProps extends SharedProps {
    inverted?: boolean;
}
/**
 * Sveltic Placeholder Line
 */
declare class PlaceholderLine extends SvelteComponentTyped<PlaceholderLineProps> {}
export default PlaceholderLine;
