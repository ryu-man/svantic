import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
import type { Style } from '../../style';

type ContainerAlign = "left aligned" | "center aligned" | "right aligned" | "justified"

interface ContainerProps extends Component {
    class?: string;
    style?: Style;
    aligned?: ContainerAlign
    fluid?:boolean
    grid?:boolean
}
/**
 * Svantic Container
 */
declare class Container extends SvelteComponentTyped<ContainerProps> {
}
export default Container;
