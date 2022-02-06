import { SvelteComponentTyped } from 'svelte/internal'
import { Color, Size } from '../../variations'
import {Module} from '../utils'
import SliderSettings from './settings'
import type { MountEvent } from '../../common'

declare type Type = 'range'
declare type State = 'disabled'
interface SliderProps extends Module<SliderSettings> {
  size?: Size
  color?: Color
  disabled?: boolean
  range?: boolean
  inverted?: boolean
  reversed?: boolean
  vertical?: boolean
  labeled?: boolean
  ticked?: boolean
  aligned?: 'bottom' | 'top'
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

  ready(): Promise<void>
}

export default Slider
