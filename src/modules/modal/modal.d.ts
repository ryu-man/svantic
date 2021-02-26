import { SvelteComponentTyped} from 'svelte/internal';
import { Module } from '../module';
import Controller from './controller'
import {ModalSettings} from './settings'
import Header from './header'
import Content from './content'
import Actions from './actions'
import Description from './description.svelte'
interface ModalProps extends Module<Controller, ModalSettings> {
    size?: string;
    basic?: boolean;
    active?: boolean;
    overlay?: boolean;
    inverted?: boolean;
    fullscreen?: boolean;
}
/**
 * Svantic Modal
 */
declare class Modal extends SvelteComponentTyped<ModalProps> {
    static header: new() => Header
    static content: new() => Content
    static actions: new() => Actions
    static description: new() => Description
}
export default Modal;
