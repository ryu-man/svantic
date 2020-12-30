import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Align } from '../../variations';
declare type Type = "horizontal" | "vertical";
interface DividerProps extends SharedProps {
    type?: Type;
    aligned?: Align;
    clearing?: boolean;
    section?: boolean;
    hidden?: boolean;
    fitted?: boolean;
    inverted?: boolean;
}
/**
 * Sveltic Divider
 */
declare class Divider extends SvelteComponentTyped<DividerProps> {
}
export default Divider;
