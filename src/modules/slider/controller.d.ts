import type { SliderSettings } from './settings'
import Controller from '../controller'

type SliderBehavior =
  | 'get value'
  | 'get thumbValue'
  | 'get numLabels'
  | 'set value'
  | 'set rangeValue'
export default class SliderController extends Controller<
  SliderBehavior,
  SliderSettings
> {
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
