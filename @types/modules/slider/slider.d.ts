import { SvelteComponentTyped} from 'svelte/internal';
import { Color, Size } from '../../variations';
import { Module } from '../module';
import Controller from './controller'
import {SliderSettings} from './settings'

declare type Type = 'range';
declare type State = 'disabled';
interface SliderProps extends Module<Controller, SliderSettings> {
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
