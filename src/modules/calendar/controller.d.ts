import type { CalendarSettings } from './settings'
import Controller from '../controller'

type CalendarBehavior =
  | 'refresh'
  | 'popup'
  | 'focus'
  | 'blur'
  | 'clear'
  | 'get date'
  | 'set date'
  | 'get mode'
  | 'set mode'
  | 'get startDate'
  | 'set startDate'
  | 'get endDate'
  | 'set endDate'
  | 'get focusDate'
  | 'set focusDate'
  | 'set minDate'
  | 'set maxDate'
export default class CalendarController extends Controller<
  CalendarBehavior,
  CalendarSettings
> {
  /**
   * @description 	Refresh the calendar
   */
  refresh(): void

  /**
   *  @description Call the popup module (e.g. passing show will show the calendar popup)
   */
  popup(arguments): void

  /**
   * @description 	Focus the calendar input
   */
  focus(): void

  /**
   *@description 	Blur the calendar input
   */
  blur(): void

  /**
   * @description 	Clear the selected date
   */
  clear(): void

  /**
   * @description 	Get the selected date
   */
  getDate(): void

  /**
   * @description Set the selected date. Pass false to updateInput to disable updating the input. Pass false to fireChange to disable the onBeforeChange and onChange callbacks for this change
   */
  setDate(date, updateInput, fireChange): void
  /**
   * @description	Get the current selection mode (year, month, day, hour, minute)
   */
  getMode(): any
  /**
   * @description	Set the current selection mode (year, month, day, hour, minute)
   */
  setMode(mode): void
  /**
   *@description 	Get the start date for range selection
   */
  getStartDate(): Date

  /**
   *@description 	Set the start date for range selection
   */
  setStartDate(date): void

  /**
   *@description 	Get the end date for range selection
   */
  getEndDate(): Date

  /**
   *@description 	Set the end date for range selection
   */
  setEndDate(date): void

  /**
   *@description 	Get the currently focused date
   */
  getFocusDate(): Date

  /**
   *@description 	Set the currently focused date
   */
  setFocusDate(date): void

  /**
   *@description 	Set the minimal selectable date
   */
  setMinDate(date): void

  /**
   *@description 	Set the maximal selectable date
   */
  setMaxDate(date): void
}
