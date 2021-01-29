import Controller from '../controller'
import type { AccordionSettings } from './settings'

type AccordionBehavior =
  | 'refresh'
  | 'open'
  | 'close others'
  | 'close'
  | 'toggle'
export default class AccordionController extends Controller<
  AccordionBehavior,
  AccordionSettings
> {
  /**
   *@description 	Refreshes all cached selectors and data
   */
  refresh(): void

  /**
   *@description 	Opens accordion content at index
   */
  open(index): void

  /**
   *@description 	Closes accordion content that are not active
   */
  closeOthers(): void

  /**
   *@description 	Closes accordion content at index
   */
  close(index): void

  /**
   *@description 	Toggles accordion content at index
   */
  toggle(index): void
}
