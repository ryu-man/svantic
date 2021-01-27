import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import { Module } from '../module';
import Controller from './controller'
interface EmbedProps extends SharedProps,Module<Controller> {
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
}
/**
 * Vomantic Embed
 */
declare class Embed extends SvelteComponentTyped<EmbedProps> {
}
export default Embed;
