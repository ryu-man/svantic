import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';
import type { Component } from '../../component';
interface RailProps extends Component {
    class?: string;
    style?: Style;
    side?: string;
    internal?: boolean;
    dividing?: boolean;
    attached?: boolean;
    close?: boolean;
}
/**
 * Vomantic Rail
 */
declare class Rail extends SvelteComponentTyped<RailProps> {
}
export default Rail;
