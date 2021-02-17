import { SvelteComponentTyped } from 'svelte/internal'
import type { Attach, Align, Color, Size } from '../../variations'
import type { DOMEvents, Component } from '../../component'
import Tag from './tag'
import Ribbon from './ribbon'
import Link from './link'
import type Detail from './detail'

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
  ribbon?: boolean
  tag?: boolean
  corner?: Attach
  pointing?: Attach | 'below'
  image?: boolean
  horizontal?: boolean
  floating?: Attach
  on?: DOMEvents<HTMLDivElement>
}
/**
 * Vomantic Label
 */
declare class Label extends SvelteComponentTyped<LabelProps> {
  static Tag: new () => Tag
  static Ribbon: new () => Ribbon
  static Link: new () => Link
  static detail: new () => Detail
}
export default Label
