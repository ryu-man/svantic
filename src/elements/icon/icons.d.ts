import { SvelteComponentTyped} from 'svelte/internal';
import type { Size } from '../../variations';
import type { Component } from '../../component';
interface IconProps extends Component {
    size?: Size;
}
/**
 * Svantic Icon
 */
declare class Icon extends SvelteComponentTyped<IconProps> {
}
export default Icon;
