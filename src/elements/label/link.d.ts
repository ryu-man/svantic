import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from '../../component'
import { Align, Attach, Color, Size } from '../../variations'

interface LinkProps extends Component {
  type?: string
  attached?: Attach
  aligned?: Align
  color?: Color
  size?: Size
  basic?: boolean
  horizontal?: boolean
  floating?: boolean
  circular?: boolean
  inverted?: boolean
  on?: {}
}
/**
 * Svantic Label Link
 */
export default class Link extends SvelteComponentTyped<LinkProps> {}
