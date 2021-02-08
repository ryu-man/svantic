import { SvelteComponentTyped } from 'svelte';
import type { Style } from '../../style';
import type { Speed, Loading, Color, Float, Size } from '../../variations';
import type { Component } from '../../component';

declare type State = 'focus' | 'loading' | 'disabled' | 'error' | '';

interface InputProps extends Component {
    class?: string;
    style?: Style;
    color?: Color;
    state?: State;
    speed?: Speed;
    size?: Size;
    icon?: Float;
    labeled?: Float;
    action?: Float;
    animation?: Loading;
    basic?: boolean;
    fluid?: boolean;
    corner?: boolean;
    inverted?: boolean;
    transparent?: boolean;
}
/**
 * Vomantic Input
 *
 */
declare class Input extends SvelteComponentTyped<InputProps>{
}
export default Input;
