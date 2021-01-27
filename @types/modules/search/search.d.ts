import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Align, Speed, Animation } from '../../variations';
import { Module } from '../module';
import Controller from './controller'

declare type State = 'disabled';
interface SearchProps extends SharedProps,Module<Controller> {
    fluid?: boolean;
    local?: boolean;
    category?: boolean;
    loading?: boolean;
    scrolling?: boolean;
    state?: State;
    aligned?: Align;
    speed?: Speed;
    animation?: Animation;
}
/**
 * Vomantic Search
 */
declare class Search extends SvelteComponentTyped<SearchProps> {
}
export default Search;
