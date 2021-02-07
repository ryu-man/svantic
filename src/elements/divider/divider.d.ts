import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
import type { Align } from '../../variations';
declare type Type = "horizontal" | "vertical";
interface DividerProps extends Component {
    type?: Type;
    aligned?: Align;
    clearing?: boolean;
    section?: boolean;
    hidden?: boolean;
    fitted?: boolean;
    ignored?: boolean;
    vertical?: boolean;
    inverted?: boolean;
}
/**
 * Vomantic Divider
 */
export default class Divider extends SvelteComponentTyped<DividerProps> {}