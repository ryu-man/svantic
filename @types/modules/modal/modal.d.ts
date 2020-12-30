import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type Controller from './controller';

interface ModalProps extends SharedProps {
    size?: string;
    basic?: boolean;
    active?: boolean;
    overlay?: boolean;
    inverted?: boolean;
    fullscreen?: boolean;
    onmount?: (controller: Controller) => void;
}
/**
 * Sveltic Modal
 */
declare class Modal extends SvelteComponentTyped<ModalProps> {
}
export default Modal;
