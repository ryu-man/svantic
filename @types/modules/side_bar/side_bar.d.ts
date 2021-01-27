import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Attach, Wide } from '../../variations';
import { Module } from '../module';
import Controller from './controller'

declare type State = 'visible' | 'dimmed';

interface SidebarProps extends SharedProps,Module<Controller> {
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
