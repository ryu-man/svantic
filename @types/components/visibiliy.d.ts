import { SvelteComponentTyped} from './component';
import type { SharedProps } from './shared_props';
interface ButtonProps extends SharedProps {
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
}
/**
 * Vomantic Button
 */
declare class Button extends SvelteComponentTyped<ButtonProps> {
}
export default Button;
