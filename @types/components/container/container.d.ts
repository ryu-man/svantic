import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Style } from '../../style';
interface ContainerProps extends SharedProps {
    class?: string;
    active?: boolean;
    disabled?: boolean;
    fluid?: boolean;
    circular?: boolean;
    loading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    compact?: boolean;
    basic?: boolean;
    toggle?: boolean;
    positive?: boolean;
    negative?: boolean;
    tertiary?: boolean;
    inverted?: boolean;
    icon?: boolean;
    style?: Style;
}
/**
 * Vomantic Container
 */
declare class Container extends SvelteComponentTyped<ContainerProps> {
}
export default Container;
