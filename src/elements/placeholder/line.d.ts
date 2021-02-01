import { Component } from '../../component';
import { SvelteComponentTyped} from 'svelte';

interface LineProps extends Component {
    short ?: boolean
    medium ?: boolean
    full ?: boolean
    long ?: boolean
    very ?: boolean
    fluid ?: boolean
}
/**
 * Svantic Placeholder Line
 */
export default class Line extends SvelteComponentTyped<LineProps> {}
