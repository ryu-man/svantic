import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';
import type { SharedProps } from '../../shared_props';
import Section from './section'
import Divider from './divider'

interface BreadcrumbProps extends SharedProps {
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
 * Vomantic Breadcrumb
 */
export default class Breadcrumb extends SvelteComponentTyped<BreadcrumbProps> {
    static Section:new ()=>Section
}