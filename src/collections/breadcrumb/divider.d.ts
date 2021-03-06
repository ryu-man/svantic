import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';
import type { Component } from '../../component'

interface DividerProps extends Component {
    class?: string;
    style?: Style;
}
/**
 * Vomantic Divider
 */
export default class Divider extends SvelteComponentTyped<DividerProps> {}
