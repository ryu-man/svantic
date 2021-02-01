import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
interface DimmableProps extends Component,Module<ToastSettings, Controller> {
}
/**
 * Svantic Dimmable
 */
declare class Dimmable extends SvelteComponentTyped<DimmableProps> {
}
export default Dimmable;
