import { SvelteComponentTyped } from 'svelte/internal'
import type { SharedProps } from '../../shared_props'
import { Align, Attach, Color, Size } from '../../variations'

interface LinkProps extends SharedProps {
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
 * Vomantic Label Link
 */
export default class Link extends SvelteComponentTyped<LinkProps> {}
