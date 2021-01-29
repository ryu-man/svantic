import { SvelteComponentTyped} from 'svelte/internal';
import { Module } from '../module';
import Controller from './controller'
import {EmbedSettings} from './settings'

interface EmbedProps extends Module<Controller, EmbedSettings> {
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
