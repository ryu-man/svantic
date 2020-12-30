import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Style } from '../../style';

interface CardProps extends SharedProps {
    class?: string;
    style?: Style;
    link?: string;
    type?: string;
    floated?: string;
    color?: string;
    column?: string;
    fluid?: boolean;
    centered?: boolean;
    horizontal?: boolean;
    raised?: boolean;
    inverted?: boolean;
    stackable?: boolean;
    doubling?: boolean;
}
/**
 * Sveltic Card
 */
declare class Card extends SvelteComponentTyped<CardProps> {
}
export default Card;
