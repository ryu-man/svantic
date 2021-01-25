import { SvelteComponentTyped } from 'svelte/internal'
import type { SharedProps } from '../../shared_props'

interface RibbonProps extends SharedProps {
  icon?: boolean
  left?: boolean
  right?: boolean
}
/**
 * Vomantic Label Ribbon
 */
export default class Ribbon extends SvelteComponentTyped<RibbonProps> {}
