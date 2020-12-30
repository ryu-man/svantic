import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';
import type { SharedProps } from '../../shared_props';
interface RailProps extends SharedProps {
    class?: string;
    style?: Style;
    side?: string;
    internal?: boolean;
    dividing?: boolean;
    attached?: boolean;
    close?: boolean;
}
/**
 * Sveltic Rail
 */
declare class Rail extends SvelteComponentTyped<RailProps> {
}
export default Rail;
