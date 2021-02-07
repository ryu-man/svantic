import type { PopupSettings } from './settings'
import Controller from '../controller'

declare type PopupBehavior =
  | 'show'
  | 'hide'
  | 'hide all'
  | 'get popup'
  | 'change content'
  | 'toggle'
  | 'is visible'
  | 'is hidden'
  | 'exists'
  | 'reposition'
  | 'set position'
  | 'destroy'
  | 'remove popup'

export default class PopupController extends Controller<
  PopupBehavior,
  PopupSettings
> {
  /**
   *@description 	Shows popup
   */
  show(): void

  /**
   *@description 	Hides popup
   */
  hide(): void

  /**
   *@description 	Hides all visible pop ups on the page
   */
  hideAll(): void

  /**
   *@description 	Returns current popup dom element
   */
  getPopup(): Promise<HTMLElement>

  /**
   *@description 	Changes current popup content
   */
  changeContent(html: Element): void

  /**
   *@description 	Toggles visibility of popup
   */
  toggle(): void

  /**
   *@description 	Returns whether popup is visible
   */
  isVisible(): Promise<boolean>

  /**
   *@description 	Returns whether popup is hidden
   */
  isHidden(): Promise<boolean>

  /**
   *@description 	Returns whether popup is created and inserted into the page
   */
  exists(): void

  /**
   * @description Adjusts popup when content size changes (only necessary for centered popups)
   */
  reposition()

  /**
   *@description 	Repositions a popup
   */
  setPosition(position: index): void

  /**
   *@description 	Removes popup from the page and removes all events
   */
  destroy(): void

  /**
   *@description 	Removes popup from the page
   */
  removePopup(): void
}
export {}
