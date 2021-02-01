import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';
import type { Wide } from '../../variations';
import type { Component } from '../../component';
interface FieldsProps extends Component {
    style?: Style;
    wide?: Wide;
    class?: string;
    equal?: boolean;
    inline?: boolean;
    grouped?: boolean;
}
/**
 * Svantic Fields
 */
declare class Fields extends SvelteComponentTyped<FieldsProps> {
}
export default Fields;
