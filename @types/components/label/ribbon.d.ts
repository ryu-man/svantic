import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from '../../component'

interface RibbonProps extends Component {
  icon?: boolean
  left?: boolean
  right?: boolean
}
/**
 * Vomantic Label Ribbon
 */
export default class Ribbon extends SvelteComponentTyped<RibbonProps> {}
