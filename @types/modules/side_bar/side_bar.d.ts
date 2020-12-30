import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
import type { Attach, Wide } from '../../variations';
declare type State = 'visible' | 'dimmed';

interface SidebarProps extends SharedProps {
    type?: string;
    wide?: Wide;
    direction?: Attach;
    state?: State;
    inverted?: boolean;
    vertical?: boolean;
}
/**
 * Sveltic Sidebar
 */
declare class Sidebar extends SvelteComponentTyped<SidebarProps> {
}
export default Sidebar;
