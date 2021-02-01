import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Wide } from '../../variations';
import { Component } from '../../component';

declare type Type = 'ordered' | 'vertical';
declare type Side = 'up' | 'right' | 'bottom' | 'left';
interface StepsProps extends Component {
    class?: string;
    type?: Type;
    side?: Side;
    wide?: Wide;
    style?: Style;
}
/**
 * Svantic Steps
 */
export default class Steps extends SvelteComponentTyped<StepsProps> {
}
