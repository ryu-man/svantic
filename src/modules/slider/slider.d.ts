import { SvelteComponentTyped } from 'svelte/internal'
import { Color, Size } from '../../variations'
import { Module } from '../module'
import Controller from './controller'
import { SliderSettings } from './settings'

declare type Type = 'range'
declare type State = 'disabled'
interface SliderProps extends Module<Controller, SliderSettings> {
  type?: Type
  size?: Size
  state?: State
  color?: Color
  inverted?: boolean
  reversed?: boolean
  vertical?: boolean
}

/**
 * Svantic Slider
 */
declare class Slider extends SvelteComponentTyped<SliderProps> {
  /**
   *@description Get the current selected value
   */
  getValue(): Promise<number>

  /**
   *@description Get the selected value of one of the range thumbs. Provide either first or second as a string parameter
   */
  getThumbValue(which: any): Promise<number>

  /**
   *@description Get the number of rendered label ticks
   */
  getNumLabels(): Promise<number>

  /**
   *@description Set the current slider value
   */
  setValue(value: any): void

  /**
   *@description Set the current range slider values
   */
  setRangeValue(fromValue: any, toValue: any): void
}
export default Slider
