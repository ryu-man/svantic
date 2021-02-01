import { Component } from '../../component';
import { SvelteComponentTyped} from 'svelte';

interface ParagraphProps extends Component {
    inverted?: boolean;
}
/**
 * Svantic Placeholder Paragraph
 */
export default class Paragraph extends SvelteComponentTyped<ParagraphProps> {}
