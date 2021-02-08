import { SvelteComponentTyped} from 'svelte/internal';
import type { Align } from '../../variations';
import { Module } from '../module';
import {} from './settings'
import Controller from './controller'
import {DimmerSettings} from './settings'

declare type Shade = 'medium' | 'light' | 'very light';
declare type Partial = 'bottom' | 'center' | 'top';

interface DimmerProps extends Module<Controller, DimmerSettings> {
    page?: boolean;
    disabled?: boolean;
    active?: boolean;
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
