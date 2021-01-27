import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
interface DimmableProps extends SharedProps,Module<ToastSettings, Controller> {
}
/**
 * Vomantic Dimmable
 */
declare class Dimmable extends SvelteComponentTyped<DimmableProps> {
}
export default Dimmable;
