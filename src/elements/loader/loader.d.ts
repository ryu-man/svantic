import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
import type { Animation, Speed } from '../../variations';
declare type Type = 'text';
declare type State = 'indeterminate' | 'active' | 'disabled';
interface LoaderProps extends Component {
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
 * Svantic Loader
 */
declare class Loader extends SvelteComponentTyped<LoaderProps> {
}
export default Loader;
