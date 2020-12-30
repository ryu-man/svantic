import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Color } from '../../variations';
interface ButtonsProps extends SharedProps {
    color?: Color;
}
/**
 * Sveltic Buttons
 */
declare class Buttons extends SvelteComponentTyped<ButtonsProps> {
}
export default Buttons;
