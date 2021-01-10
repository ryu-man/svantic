import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
import { SvelteComponentTyped} from 'svelte';

interface PlaceholderHeaderProps extends SharedProps {
    inverted?: boolean;
}
/**
 * Vomantic Placeholder Header
 */
declare class PlaceholderHeader extends SvelteComponentTyped<PlaceholderHeaderProps> {}
export default PlaceholderHeader;
