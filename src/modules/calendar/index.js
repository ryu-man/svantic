import { default as Calendar } from './calendar.svelte'
import { default as InlineCalendar } from './inline_calendar.svelte'
import { default as CalendarController } from './calendar'

Calendar.inline = InlineCalendar

export { Calendar, InlineCalendar, CalendarController }
export default Calendar
