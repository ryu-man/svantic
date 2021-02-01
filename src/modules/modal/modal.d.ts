import { SvelteComponentTyped} from 'svelte/internal';
import { Module } from '../module';
import Controller from './controller'
import {ModalSettings} from './settings'

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
}
export default Modal;
