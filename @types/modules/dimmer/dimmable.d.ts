import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
interface DimmableProps extends Component,Module<ToastSettings, Controller> {
}
/**
 * Vomantic Dimmable
 */
declare class Dimmable extends SvelteComponentTyped<DimmableProps> {
}
export default Dimmable;
