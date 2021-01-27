import { SvelteComponentTyped} from 'svelte/internal';
import { SharedProps } from '../../shared_props';
import { Color, Size } from '../../variations';
import { Module } from '../module';
import Controller from './controller'

declare type Type = 'range';
declare type State = 'disabled';
interface SliderProps extends SharedProps,Module<Controller> {
    type?: Type;
    size?: Size;
    state?: State;
    color?: Color;
    inverted?: boolean;
    reversed?: boolean;
    vertical?: boolean;
}
/**
 * Vomantic Slider
 */
declare class Slider extends SvelteComponentTyped<SliderProps> {
}
export default Slider;
