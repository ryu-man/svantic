import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
import type { Color } from '../../variations';
interface ButtonsProps extends Component {
    color?: Color;
}
/**
 * Svantic Buttons
 */
declare class Buttons extends SvelteComponentTyped<ButtonsProps> {
}
export default Buttons;
