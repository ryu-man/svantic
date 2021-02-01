import { SvelteComponentTyped } from 'svelte/internal'
import type { Style } from '../../style'
import type { Component } from '../../component'
import type { Size } from 'src/variations'

type Side = 'left' | 'right'
interface RailProps extends Component {
  class?: string
  style?: Style
  side?: Side
  internal?: Side
  dividing?: Side
  attached?: Side
  close?: Side
  Size?: Size
}
/**
 * @description
 */
declare class Rail extends SvelteComponentTyped<RailProps> {}
export default Rail
