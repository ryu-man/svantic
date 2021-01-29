import { Component } from '../../component';
import { SvelteComponentTyped} from 'svelte';

interface ParagraphProps extends Component {
    inverted?: boolean;
}
/**
 * Vomantic Placeholder Paragraph
 */
export default class Paragraph extends SvelteComponentTyped<ParagraphProps> {}
