import { SvelteComponentTyped} from 'svelte/internal';
import { SharedProps } from '../../shared_props';
import Item from './item';
import Tab from './tab';
import { Module } from '../module';
import Controller from './controller'
import {TabularMenuSettings} from './settings'

interface TabularMenuProps extends SharedProps,Module<Controller, TabularMenuSettings> {
    attached?: string;
    loading?: boolean;
    segment?: boolean;
    active?: boolean;
}
/**
 * Vomantic TabularMenu
 */
export default class TabularMenu extends SvelteComponentTyped<TabularMenuProps> {
    static Item: new ()=> Item
    static Tab: new ()=> Tab
}
