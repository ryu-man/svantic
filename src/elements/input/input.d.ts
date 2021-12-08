import { SvelteComponentTyped } from 'svelte'
import type { Style } from '../../style'
import type { Speed, Loading, Color, Float, Size } from '../../variations'
import type { Component } from '../../component'
import type { DOMEvents } from '../../events'
declare type State = 'focus' | 'loading' | 'disabled' | 'error' | ''

interface InputProps extends Component {
  class?: string
  style?: Style
  color?: Color
  state?: State
  speed?: Speed
  size?: Size | boolean
  icon?: Float | boolean
  labeled?: Float | boolean
  action?: Float | boolean
  animation?: Loading
  basic?: boolean
  fluid?: boolean
  corner?: boolean
  inverted?: boolean
  transparent?: boolean

  type?: 'text' | 'number' | 'date' | 'datetime' | 'email' | 'tel' | 'file'
  placeholder?: string
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  pattern?: string
  value?: string
}
interface InputEvents<T = HTMLInputElement> {
  focus: DOMEvents<T>['focus']
  focusin: DOMEvents<T>['focusin']
  focusout: DOMEvents<T>['focusout']
  blur: DOMEvents<T>['blur']
  input: DOMEvents<T>['input']
  change: DOMEvents<T>['change']
  keydown: DOMEvents<T>['keydown']
  keypress: DOMEvents<T>['keypress']
  keyup: DOMEvents<T>['keyup']
}
/**
 * Vomantic Input
 *
 */
declare class Input extends SvelteComponentTyped<InputProps, InputEvents> {}
export default Input
