import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';
import type { Component } from '../../component';

interface SectionProps extends Component {
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
 * Svantic Section
 */
export default class Section extends SvelteComponentTyped<SectionProps> {}
