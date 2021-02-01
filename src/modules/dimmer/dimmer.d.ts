import { SvelteComponentTyped} from 'svelte/internal';
import type { Align } from '../../variations';
import { Module } from '../module';
import {} from './settings'
import Controller from './controller'
import {DimmerSettings} from './settings'

declare type Type = 'content' | 'page';
declare type State = 'active' | 'disabled';
declare type Shade = 'medium' | 'light' | 'very light';
declare type Partial = 'bottom' | 'center' | 'top';

interface DimmerProps extends Module<Controller, DimmerSettings> {
    type?: Type;
    state?: State;
    aligned?: Align;
    shades?: Shade;
    partial?: Partial;
    inverted?: boolean;
}
/**
 * Svantic Dimmer
 */
declare class Dimmer extends SvelteComponentTyped<DimmerProps> {
}
export default Dimmer;
