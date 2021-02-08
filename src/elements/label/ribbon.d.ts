import type { Attach, Color } from 'src/variations'
import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from '../../component'

interface RibbonProps extends Component {
  icon?: boolean
  right?: boolean
  icon?: Attach
  color?: Color
}
/**
 * Vomantic Label Ribbon
 */
export default class Ribbon extends SvelteComponentTyped<RibbonProps> {}
