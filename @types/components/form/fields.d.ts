import { SvelteComponentTyped} from 'svelte/internal';
import type { Style } from '../../style';
import type { Wide } from '../../variations';
import type { SharedProps } from '../../shared_props';
interface FieldsProps extends SharedProps {
    style?: Style;
    wide?: Wide;
    class?: string;
    equal?: boolean;
    inline?: boolean;
    grouped?: boolean;
}
/**
 * Sveltic Fields
 */
declare class Fields extends SvelteComponentTyped<FieldsProps> {
}
export default Fields;
