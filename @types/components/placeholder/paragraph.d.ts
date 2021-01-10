import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
import { SvelteComponentTyped} from 'svelte';

interface PlaceholderParagraphProps extends SharedProps {
    inverted?: boolean;
}
/**
 * Vomantic Placeholder Paragraph
 */
declare class PlaceholderParagraph extends SvelteComponentTyped<PlaceholderParagraphProps> {}
export default PlaceholderParagraph;
