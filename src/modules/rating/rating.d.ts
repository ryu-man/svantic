import { SvelteComponentTyped } from 'svelte/internal'
import { Color, Size } from '../../variations'
import {Module} from '../utils'
import RatingSettings from './settings'
import type { MountEvent } from '../../common'

interface RatingProps extends Module<RatingSettings> {
  icon?: string
  rating?: string
  maxRating?: string
  disabled?: boolean
  color?: Color
  size?: Size
}
/**
 * Vomantic Rating
 */
export default class Rating extends SvelteComponentTyped<RatingProps> {
  /**
   *@description 	Sets rating programmatically
   */
  setRating(rating): void

  /**
   *@description 	Gets current rating
   */
  getRating(): Promise<String>

  /**
   *@description 	Disables interactive rating mode
   */
  disable(): void

  /**
   *@description 	Enables interactive rating mode
   */
  enable(): void

  /**
   *@description 	Clears current rating
   */
  clearRating(): void

  ready(): Promise<void>
}
