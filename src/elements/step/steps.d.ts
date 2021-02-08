import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Attach, Size, Wide } from '../../variations'
import { Component } from '../../component'

declare type Side = 'up' | 'right' | 'bottom' | 'left'
interface StepsProps extends Component {
  size?: Size
  wide?: Wide
  attached: Attach
  ordered?: boolean
  vertical?: boolean
  ordered?: boolean
  vertical?: boolean
  tablet?: boolean
  stackable?: boolean
  fluid?: boolean
  unstackable?: boolean
  inverted?: boolean
}
/**
 * Vomantic Steps
 */
export default class Steps extends SvelteComponentTyped<StepsProps> {}
