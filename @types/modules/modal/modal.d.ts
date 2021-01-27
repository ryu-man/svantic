import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import { Module } from '../module';
import Controller from './controller'
interface ModalProps extends SharedProps,Module<Controller> {
    size?: string;
    basic?: boolean;
    active?: boolean;
    overlay?: boolean;
    inverted?: boolean;
    fullscreen?: boolean;
    onMount?: (controller: Controller) => void;
}
/**
 * Vomantic Modal
 */
declare class Modal extends SvelteComponentTyped<ModalProps> {
}
export default Modal;
