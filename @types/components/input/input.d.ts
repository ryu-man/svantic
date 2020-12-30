import { SvelteComponentTyped } from 'svelte';
import type { Style } from '../../style';
import type { Speed, Animation, Color, Float, Size } from '../../variations';
import type { SharedProps } from '../../shared_props';

declare type State = 'focus' | 'loading' | 'disabled' | 'error' | '';

interface InputProps extends SharedProps {
    class?: string;
    style?: Style;
    color?: Color;
    state?: State;
    speed?: Speed;
    size?: Size;
    icon?: Float;
    labeled?: Float;
    action?: Float;
    animation?: Animation;
    basic?: boolean;
    fluid?: boolean;
    corner?: boolean;
    inverted?: boolean;
    transparent?: boolean;
}
/**
 * Sveltic Input
 *
 */
declare class Input extends SvelteComponentTyped<InputProps>{
}
export default Input;
