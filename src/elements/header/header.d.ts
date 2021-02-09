import { SvelteComponentTyped } from 'svelte/internal'
import type { Align, Attach, Color, Float, Size } from 'src/variations'
import { Component } from '../../component'
import { default as H1 } from './h1'
import { default as H2 } from './h2'
import { default as H3 } from './h3'
import { default as H4 } from './h4'
import { default as H5 } from './h5'
import { default as Sub } from './sub'

export interface HeaderProps extends Component {
  disabled?: boolean
  primary?: boolean
  secondary?: boolean
  inverted?: boolean
  icon?: boolean
  sub?: boolean
  divider?: boolean | 'horizontal'
  dividing?: boolean
  attached?: Attach
  aligned?: Align
  floated?: Float
  size?: Size
  color?: Color
  block?: boolean
  justified?: boolean
}
/**
 * @description
 */
declare class Header extends SvelteComponentTyped<HeaderProps> {
  static h1: new () => H1
  static h2: new () => H2
  static h3: new () => H3
  static h4: new () => H4
  static h5: new () => H5
  static sub: new () => Sub
}
export default Header
