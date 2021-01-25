import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
import Side from './side';
interface ShapeProps extends SharedProps {
    class?: string;
    active?: boolean;
    disabled?: boolean;
    fluid?: boolean;
    circular?: boolean;
    loading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    compact?: boolean;
    basic?: boolean;
    toggle?: boolean;
    positive?: boolean;
    negative?: boolean;
    tertiary?: boolean;
    inverted?: boolean;
    icon?: boolean;
    style?: Style;
}
/**
 * Vomantic Shape
 */
declare class Shape extends SvelteComponentTyped<ShapeProps> {
    static Side: new ()=> Side
}
export default Shape;
