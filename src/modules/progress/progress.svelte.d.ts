import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Attach, Color, Size, Speed } from '../../variations'
import Module from '../module'
import ProgressSettings from './settings'

type State =
  | 'indeterminate'
  | 'swinging indeterminate'
  | 'sliding indeterminate'
  | 'filling indeterminate'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'success'
  | 'active'

interface ProgressProps extends Module<ProgressSettings> {
  indicating?: boolean
  attached?: Attach
  speed?: Speed
  size?: Size
  color?: Color
  value?: number
  total?: number
  inverted?: boolean
  style?: Style
  indeterminate?: boolean | 'swinging' | 'sliding' | 'filling'
  disabled?: boolean
  error?: boolean
  warning?: boolean
  success?: boolean
  active?: boolean
}

/**
 * @description Svantic Progress
 */
export default class Progress extends SvelteComponentTyped<ProgressProps> {
  setPercent(percent: number): this

  setProgress(value: number): this

  increment(incrementValue: number): this

  decrement(decrementValue: number): this

  updateProgress(value: number): this

  complete(keepState: boolean): boolean

  reset(): this

  setTotal(total: number): this

  getText(text): string

  getNormalizedValue(value): number

  getPercent(): number

  getValue(): number

  getTotal(): number

  isComplete(): boolean

  isSuccess(): boolean

  isWarning(): boolean

  isError(): boolean

  isActive(): boolean

  setActive(): this

  setWarning(text: string, keepState: boolean): this

  setSuccess(text: string, keepState: boolean): this

  setError(text: string, keepState: boolean): this

  setDuration(value: number): this

  setLabel(text: string): this

  setBarLabel(text: string): this

  removeActive(): this

  removeWarning(): this

  removeSuccess(): this

  removeError(): this
}
