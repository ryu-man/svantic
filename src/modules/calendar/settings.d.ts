type PositionV = 'top' | 'bottom'
type PositionH = 'left' | 'right'
type Position = `${PositionV} ${PositionH}`

export interface CalendarSettings {
  // Picker type, can be datetime, date, time, month, or year
  type?: 'datetime' | 'date' | 'time' | 'month' | 'year'
  // Day for first day column (0 = Sunday)
  firstDayOfWeek?: number
  // Add row(s) to shorter months to keep day calendar height consistent (6 rows)
  constantHeight?: number
  // Show a 'today/now' button at the bottom of the calendar
  today?: boolean
  // Close the popup after selecting a date/time
  closable?: boolean
  // Month before day when parsing/converting date from/to text
  monthFirst?: boolean
  // Set input to readonly on touch devices
  touchReadonly?: boolean
  // Create the calendar inline instead of inside a popup
  inline?: boolean
  // Display the week number on the left
  showWeekNumbers?: boolean
  // Disable some days of the week from selection (0= Sunday, 1=Monday, ...)
  disabledDaysOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  // An array of Date-Objects or Objects with given message to show in a popup when hovering over the appropriate date {date: Date, message: string}
  disabledDates?: { date: Date; message: string }[]
  // An array of Date-Objects to be enabled for selection. All other dates are disabled
  enabledDates?: Date[]
  // An array of Date-Objects or Objects with given message to show in a popup when hovering over the appropriate date and an individual class for the cell {date: Date, message: string, class: string}
  eventDates?: { date: Date; message: string; class: string }[]
  // Default class to be added to each cell of an eventDate date element when no specific class is given to the eventDate element
  eventClass?: string
  // Choose when to show the popup (defaults to focus for input, click for others)
  on?: null | 'focus' | 'click'
  // Date to display initially when no date is selected (null = now)
  initialDate?: null | Date
  // Display mode to start in, can be year, month, day, hour, minute (false = 'day')
  startMode?: boolean
  // Minimum date/time that can be selected, dates/times before are disabled
  minDate?: Date
  // Maximum date/time that can be selected, dates/times after are disabled
  maxDate?: Date
  // Show am/pm in time mode
  ampm?: boolean
  // Disable year selection mode
  disableYear?: boolean
  // Disable month selection mode
  disableMonth?: boolean
  // Disable minute selection mode
  disableMinute?: boolean
  // Format the input text upon input blur and module creation
  formatInput?: string
  // jQuery object or selector for another calendar that represents the start date of a date range
  startCalendar?: any
  // jQuery object or selector for another calendar that represents the end date of a date range
  endCalendar?: any
  // Show multiple months when in day' mode
  multiMonth?: number
  // Minimum time gap, can only be 5, 10, 15, 20, 30
  minTimeGap?: 5 | 10 | 15 | 20 | 30
  // Starting short year until 99 where it will be assumed to belong to the last century
  centuryBreak?: number
  // century to be added to 2-digit years (00 to centuryBreak-1)
  currentCentury?: number
  // Make adjacent days from previous and next month also selectable
  selectAdjacentDays?: boolean
  popupOptions?: {
    position?: Position
    lastResort?: Position
    prefer?: 'opposite'
    hideOnScroll?: false
  }
  text?: {
    days?: [string, string, string, string, string, string, string]
    months?: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
    monthsShort?: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
    today?: string
    now?: string
    am?: string
    pm?: string
  }

  /*************** Callbacks ******************/

  // Is called before a calendar date changes. return false; will cancel the change
  onBeforeChange?: () => void | boolean
  // Is called after a calendar date has changed.
  onChange?: () => void
  // Is called before a calendar is shown. return false; will prevent the calendar to be shown
  onShow?: () => void | boolean
  // Is called when the calendar is shown
  onVisible?: () => void
  // Is called before a calendar is hidden. return false; will prevent the calendar to be hidden
  onHide?: () => void | boolean
  // Is called when the calendar is hidden
  onHidden?: () => void
  // Is called when a cell of the calendar is selected providing its value and current mode. return false; will prevent the selection
  onSelect?: (date: Date, mode) => void | boolean
}
