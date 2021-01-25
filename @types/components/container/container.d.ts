import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Style } from '../../style';

type ContainerAlign = "left aligned" | "center aligned" | "right aligned" | "justified"

interface ContainerProps extends SharedProps {
    class?: string;
    style?: Style;
    aligned?: ContainerAlign
    fluid?:boolean
    grid?:boolean
}
/**
 * Vomantic Container
 */
declare class Container extends SvelteComponentTyped<ContainerProps> {
}
export default Container;
