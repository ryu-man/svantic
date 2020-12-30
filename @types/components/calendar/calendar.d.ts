import { SvelteComponentTyped} from 'svelte/internal';
import type { SharedProps } from '../../shared_props';
interface CalendarProps extends SharedProps {
    icon?: string;
    disabled?: boolean;
}
/**
 * Sveltic Calendar
 */
declare class Calendar extends SvelteComponentTyped<CalendarProps> {
}
export default Calendar;
