import { SvelteComponentTyped} from 'svelte/internal';
import type { Component } from '../../component';
import type { Style } from '../../style';

interface CardProps extends Component {
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
 * Svantic Card
 */
declare class Card extends SvelteComponentTyped<CardProps> {
}
export default Card;
