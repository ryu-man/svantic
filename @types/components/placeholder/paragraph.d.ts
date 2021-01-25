import { SharedProps } from '../../shared_props';
import { SvelteComponentTyped} from 'svelte';

interface ParagraphProps extends SharedProps {
    inverted?: boolean;
}
/**
 * Vomantic Placeholder Paragraph
 */
export default class Paragraph extends SvelteComponentTyped<ParagraphProps> {}
