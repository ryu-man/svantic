import { SvelteComponentTyped} from 'svelte/internal';
import { Module } from '../module';
import Controller from './controller'
import {ModalSettings} from './settings'
import Header from './header'
import Content from './content'
import Actions from './actions'
interface ModalProps extends Module<Controller, ModalSettings> {
    size?: string;
    basic?: boolean;
    active?: boolean;
    overlay?: boolean;
    inverted?: boolean;
    fullscreen?: boolean;
}
/**
 * Vomantic Modal
 */
declare class Modal extends SvelteComponentTyped<ModalProps> {
    static header: new() => Header
    static content: new() => Content
    static actions: new() => Actions
}
export default Modal;
