import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import { Module } from '../module';
import Controller from './controller'
import {ModalSettings} from './settings'

interface ModalProps extends SharedProps,Module<Controller, ModalSettings> {
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
}
export default Modal;
