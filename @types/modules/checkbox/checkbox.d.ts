import { SvelteComponentTyped } from 'svelte/internal'
import type { SharedProps } from '../../shared_props'
import { Module } from '../module'
import {} from './settings'
import Controller from './controller'
import {CheckboxSettings} from './settings'

declare type Type = 'radio' | 'slider' | 'toggle'
declare type State = 'read-only' | 'checked' | 'disabled'

interface CheckboxProps extends SharedProps,Module<Controller, CheckboxSettings> {
  id?: string
  name?: string
  type?: Type
  state?: State
  fitted?: boolean
  inverted?: boolean
}
/**
 * Vomantic Checkbox
 */
declare class Checkbox extends SvelteComponentTyped<CheckboxProps> {}
export default Checkbox
