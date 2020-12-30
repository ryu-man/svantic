import { SvelteComponentTyped} from 'svelte/internal';
import { SharedProps } from '../../shared_props';
import { Attach, Float, Size } from '../../variations';
declare type Type = 'message' | 'list' | 'icon' | 'dissmissible';
declare type Context = 'info' | 'warning' | 'positive' | 'negative';
declare type State = 'visible' | 'hidden';
interface MessageProps extends SharedProps {
    type?: Type;
    context?: Context;
    attached?: Attach;
    floating?: Float;
    state?: State;
    size?: Size;
    compact?: boolean;
}
/**
 * Sveltic Message
 */
declare class Message extends SvelteComponentTyped<MessageProps> {
}
export default Message;
