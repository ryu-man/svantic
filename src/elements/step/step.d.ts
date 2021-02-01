import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Component } from '../../component';

declare type State = 'completed' | 'active' | 'disabled';
interface StepProps extends Component {
    class?: string;
    state?: State;
    style?: Style;
}
/**
 * Svantic Step
 */
export default class Step extends SvelteComponentTyped<StepProps> {
}
