import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
declare type State = 'completed' | 'active' | 'disabled';
interface StepProps extends SharedProps {
    class?: string;
    state?: State;
    style?: Style;
}
/**
 * Vomantic Step
 */
declare class Step extends SvelteComponentTyped<StepProps> {
}
export default Step;
