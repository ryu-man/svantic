import type { ToastSettings } from './settings'
import Controller from '../controller'

type ToastBehavior =
  | 'animate pause'
  | 'animate continue'
  | 'close'
  | 'get toasts'
  | 'get remainingTime'
export default class ToastController extends Controller<
  ToastBehavior,
  ToastSettings
> {
  /**
   *@description 	Pauses the display time decrease (and possible progress bar animation)
   */
  animatePause(): void
  /**
   *@description 	Continues decreasing display time (and possible progress bar animation)
   */
  animateContinue(): void
  /**
   *@description 	Closes the toast
   */
  close(): void
  /**
   *@description 	Returns all toasts as an array of objects which are visible within the current toast-container
   */
  getToasts(): any[]
  /**
   *@description 	Returns the remaining time in milliseconds
   */
  getRemainingTime(): number
}
