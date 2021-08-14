import { SvelteComponentTyped } from 'svelte/internal'
import Module from '../module'
import CalendarSettings from './settings'

interface CalendarProps extends Module<CalendarSettings> {
  icon?: string
  disabled?: boolean
}
/**
 * Vomantic Calendar
 */
declare class Calendar extends SvelteComponentTyped<CalendarProps> {

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
   getDate(): Promise<Date>
 
   /**
    * @description Set the selected date. Pass false to updateInput to disable updating the input. Pass false to fireChange to disable the onBeforeChange and onChange callbacks for this change
    */
   setDate(date: Date, updateInput: boolean, fireChange: boolean): void
   /**
    * @description	Get the current selection mode (year, month, day, hour, minute)
    */
   getMode(): Promise<'year' | 'month' | 'day' | 'hour' | 'minute'>
   /**
    * @description	Set the current selection mode (year, month, day, hour, minute)
    */
   setMode(mode: 'year' | 'month' | 'day' | 'hour' | 'minute'): void
   /**
    *@description 	Get the start date for range selection
    */
   getStartDate(): Promise<Date>
 
   /**
    *@description 	Set the start date for range selection
    */
   setStartDate(date: Date): void
 
   /**
    *@description 	Get the end date for range selection
    */
   getEndDate(): Promise<Date>
 
   /**
    *@description 	Set the end date for range selection
    */
   setEndDate(date): void
 
   /**
    *@description 	Get the currently focused date
    */
   getFocusDate(): Promise<Date>
 
   /**
    *@description 	Set the currently focused date
    */
   setFocusDate(date): void
 
   /**
    *@description 	Set the minimal selectable date
    */
   setMinDate(date: Date): void
 
   /**
    *@description 	Set the maximal selectable date
    */
   setMaxDate(date: Date): void
}
export default Calendar
