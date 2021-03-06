import { SvelteComponentTyped } from 'svelte/internal'
import type { Size, Float, Color, Attach, Loading } from '../../variations'
import type { Component, DOMEvents } from '../../component'
import type { Icons } from '../icon/icon'
import Content from './content'
import Or from './or'

declare type State = 'active' | 'disabled' | 'loading'

declare type Social =
  | 'youtube'
  | 'instagram'
  | 'linkedin'
  | 'vk'
  | 'google'
  | 'twitter'
  | 'facebook'

export interface ButtonProps extends Component {
  size?: Size
  color?: Color
  state?: State
  social?: Social
  floated?: Float
  labeled?: boolean | Float
  attached?: Attach
  animated?: true | 'fade' | 'vertical'
  icon?: true | Icons
  fluid?: boolean
  toggle?: boolean
  compact?: boolean
  positive?: boolean
  negative?: boolean
  inverted?: boolean
  circular?: boolean
  basic?: boolean
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  disable?: boolean
  loading?: boolean | Loading
  tabIndex?: number
  as?: 'div' | 'button'
  on?: DOMEvents<HTMLDivElement>
}
/**
 * Vomantic Button
 */
declare class Button extends SvelteComponentTyped<ButtonProps> {
  static content: new () => Content
  static or: new () => Or

}
export default Button
