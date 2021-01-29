import { SvelteComponentTyped } from 'svelte/internal'
import { Module } from '../module'
import Controller from './controller'
import {CalendarSettings} from './settings'

interface CalendarProps extends Module<Controller, CalendarSettings> {
  icon?: string
  disabled?: boolean
}
/**
 * Vomantic Calendar
 */
declare class Calendar extends SvelteComponentTyped<CalendarProps> {}
export default Calendar
