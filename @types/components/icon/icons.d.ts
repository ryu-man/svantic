import { SvelteComponentTyped} from 'svelte/internal';
import type { Size } from '../../variations';
import type { SharedProps } from '../../shared_props';
interface IconProps extends SharedProps {
    size?: Size;
}
/**
 * Vomantic Icon
 */
declare class Icon extends SvelteComponentTyped<IconProps> {
}
export default Icon;
