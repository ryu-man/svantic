import type { Align } from 'src/variations';
import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
import type { Style } from '../../style';


interface ContainerProps extends Component {
    class?: string;
    style?: Style;
    aligned?: boolean | Align
    justified?: boolean
    fluid?:boolean
    grid?:boolean
}
/**
 * Vomantic Container
 */
declare class Container extends SvelteComponentTyped<ContainerProps> {
}
export default Container;
