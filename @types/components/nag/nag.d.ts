import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';
import type { SharedProps } from '../../shared_props';
interface NagProps extends SharedProps {
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
 * Vomantic Nag
 */
declare class Nag extends SvelteComponentTyped<NagProps> {
}
export default Nag;
