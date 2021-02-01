import { SvelteComponentTyped } from 'svelte/internal'
import type { Size, Float, Color, Attach } from '../../variations'
import type { Component, DOMEvents } from '../../component'

declare type Type =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'icon'
  | 'labeled'
  | 'left labeled'
  | 'right labeled'
  | 'basic'
  | 'inverted'
  | 'animated'
  | ''
declare type State = 'active' | 'disabled' | 'loading' | ''
declare type Social =
  | 'youtube'
  | 'instagram'
  | 'linkedin'
  | 'vk'
  | 'google'
  | 'twitter'
  | 'facebook'
  | ''

interface ButtonProps extends Component {
  size?: Size
  type?: Type | Type[]
  color?: Color
  state?: State
  social?: Social
  floated?: Float
  attached?: Attach
  fade?: boolean
  fluid?: boolean
  toggle?: boolean
  compact?: boolean
  positive?: boolean
  negative?: boolean
  inverted?: boolean
  circular?: boolean
  vertical?: boolean
  on?: DOMEvents<HTMLDivElement>
}
/**
 * Svantic Button
 */
declare class Button extends SvelteComponentTyped<ButtonProps> {}
export default Button
