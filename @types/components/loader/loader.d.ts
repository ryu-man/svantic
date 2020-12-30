import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Animation, Speed } from '../../variations';
declare type Type = 'text';
declare type State = 'indeterminate' | 'active' | 'disabled';
interface LoaderProps extends SharedProps {
    type?: Type;
    state?: State;
    animationStyle?: Animation;
    speed?: Speed;
    inline?: false;
    center?: false;
    inverted?: false;
    icon?: boolean;
}
/**
 * Sveltic Loader
 */
declare class Loader extends SvelteComponentTyped<LoaderProps> {
}
export default Loader;
