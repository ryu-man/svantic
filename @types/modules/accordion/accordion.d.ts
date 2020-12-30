import type { Style } from '../../style';
import type { SharedProps } from '../../shared_props';
import { SvelteComponentTyped} from 'svelte/internal';

interface AccordionProps extends SharedProps {
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
 * Sveltic Accordion
 */
declare class Accordion extends SvelteComponentTyped<AccordionProps> {
}
export default Accordion;
