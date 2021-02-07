import type { RatingSettings } from './settings'
import Controller from '../controller'

type RatingBehavior =
  | 'setRating'
  | 'getRating'
  | 'disable'
  | 'enable'
  | 'clearRating'
export default class RatingController extends Controller<
  RatingBehavior,
  RatingSettings
> {
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
}
