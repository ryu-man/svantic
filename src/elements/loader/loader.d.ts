import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from '../../component'
import type { Loading, Speed } from '../../variations'

interface LoaderProps extends Component {
  text?: boolean
  intermediat?: boolean
  active?: boolean
  disabled?: boolean
  animationStyle?: Loading
  speed?: Speed
  inline?: false
  center?: false
  inverted?: false
  icon?: boolean
}
/**
 * Vomantic Loader
 */
declare class Loader extends SvelteComponentTyped<LoaderProps> {}
export default Loader
