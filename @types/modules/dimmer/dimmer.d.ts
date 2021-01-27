import { SvelteComponentTyped} from 'svelte/internal';
import type { Align } from '../../variations';
import type { SharedProps } from '../../shared_props';
import { Module } from '../module';
import {} from './settings'
import Controller from './controller'
import {DimmerSettings} from './settings'

declare type Type = 'content' | 'page';
declare type State = 'active' | 'disabled';
declare type Shade = 'medium' | 'light' | 'very light';
declare type Partial = 'bottom' | 'center' | 'top';

interface DimmerProps extends SharedProps,Module<Controller, DimmerSettings> {
    type?: Type;
    state?: State;
    aligned?: Align;
    shades?: Shade;
    partial?: Partial;
    inverted?: boolean;
}
/**
 * Vomantic Dimmer
 */
declare class Dimmer extends SvelteComponentTyped<DimmerProps> {
}
export default Dimmer;
