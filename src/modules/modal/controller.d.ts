import type { ModalSettings } from './settings'
import Controller from '../controller'

declare type ModalBehavior =
  | 'show'
  | 'hide'
  | 'toggle'
  | 'refresh'
  | 'show dimmer'
  | 'hide dimmer'
  | 'hide others'
  | 'hide all'
  | 'cache sizes'
  | 'can fit'
  | 'is active'
  | 'set active'
  | 'attach events'

export default class ModalController extends Controller<
  ModalBehavior,
  ModalSettings
> {
  /**
   *@description 	Shows the modal
   */
  show(): void

  /**
   *@description 	Hides the modal
   */
  hide(): void

  /**
   *@description 	Toggles the modal
   */
  toggle(): void

  /**
   *@description 	Refreshes centering of modal on page
   */
  refresh(): void

  /**
   *@description 	Shows associated page dimmer
   */
  showDimmer(): void

  /**
   *@description 	Hides associated page dimmer
   */
  hideDimmer(): void

  /**
   *@description 	Hides all modals not selected modal in a dimmer
   */
  hideOthers(): void

  /**
   *@description 	Hides all visible modals in the same dimmer
   */
  hideAll(): void

  /**
   *@description 	Caches current modal size
   */
  cacheSizes(): void

  /**
   *@description 	Returns whether the modal can fit on the page
   */
  canFit(): Promise<boolean>

  /**
   *@description 	Returns whether the modal is active
   */
  isActive(): Promise<boolean>

  /**
   *@description 	Sets modal to active
   */
  setActive(): void
}
export {}
