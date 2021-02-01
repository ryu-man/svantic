import { SvelteComponentTyped } from 'svelte/internal'
import type { Attach, Align, Color, Size } from '../../variations'
import type { DOMEvents, Component } from '../../component'
import Tag from './tag'
import Ribbon from './ribbon'
import Link from './link'

declare type Type =
  | 'ribbon'
  | 'tag'
  | 'right corner'
  | 'left corner'
  | 'pointing'
  | 'left pointing'
  | 'right pointing'
  | 'below pointing'
  | 'image'
  | 'horizontal'
  | 'floating'
  | 'left floating'
  | 'bottom floating'

interface LabelProps extends Component {
  type?: Type
  attached?: Attach
  floating?: Attach
  aligned?: Align
  color?: Color
  size?: Size
  basic?: boolean
  inverted?: boolean
  horizontal?: boolean
  circular?: boolean
  on?: DOMEvents<HTMLDivElement>
}
/**
 * Svantic Label
 */
declare class Label extends SvelteComponentTyped<LabelProps> {
  static Tag: new () => Tag
  static Ribbon: new () => Ribbon
  static Link: new () => Link
}
export default Label
