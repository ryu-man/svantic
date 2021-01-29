import { SvelteComponentTyped} from 'svelte/internal';
import type { Attach, Wide } from '../../variations';
import { Module } from '../module';
import Controller from './controller'
import {SidebarSettings} from './settings'

declare type State = 'visible' | 'dimmed';

interface SidebarProps extends Module<Controller, SidebarSettings> {
    type?: string;
    wide?: Wide;
    direction?: Attach;
    state?: State;
    inverted?: boolean;
    vertical?: boolean;
}
/**
 * Vomantic Sidebar
 */
declare class Sidebar extends SvelteComponentTyped<SidebarProps> {
}
export default Sidebar;
