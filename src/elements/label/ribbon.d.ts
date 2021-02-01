import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from '../../component'

interface RibbonProps extends Component {
  icon?: boolean
  left?: boolean
  right?: boolean
}
/**
 * Svantic Label Ribbon
 */
export default class Ribbon extends SvelteComponentTyped<RibbonProps> {}
