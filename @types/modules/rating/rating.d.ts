import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Color, Size } from '../../variations'
import Controller from './controller'

interface RatingProps {
  class?: string
  style?: Style
  icon?: string
  rating?: string
  maxRating?: string
  disabled?: boolean
  color?: Color
  size?: Size
  onMount?: (controller: Controller) => void
}
/**
 * Vomantic Rating
 */
export default class Rating extends SvelteComponentTyped<RatingProps> {}
