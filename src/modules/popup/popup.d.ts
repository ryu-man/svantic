import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';
import { Module } from '../module';
import Controller from './controller'
import {PopupSettings} from './settings'
import Header from './header';

interface PopupProps extends Module<Controller, PopupSettings> {
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
 * Svantic Popup
 */
declare class Popup extends SvelteComponentTyped<PopupProps> {
    Header: new ()=> Header
}
export default Popup;
