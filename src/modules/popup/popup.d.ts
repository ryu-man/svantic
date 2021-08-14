import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import Module from '../module'
import PopupSettings from './settings'
import Header from './header'

interface PopupProps extends Module<PopupSettings> {
  class?: string
  active?: boolean
  disabled?: boolean
  fluid?: boolean
  circular?: boolean
  loading?: boolean
  primary?: boolean
  secondary?: boolean
  compact?: boolean
  basic?: boolean
  toggle?: boolean
  positive?: boolean
  negative?: boolean
  tertiary?: boolean
  inverted?: boolean
  icon?: boolean
  style?: Style
}
/**
 * @description Svantic Popup
 */
declare class Popup extends SvelteComponentTyped<PopupProps> {
  Header: new () => Header

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
  setPosition(position: number): void

  /**
   *@description 	Removes popup from the page and removes all events
   */
  destroy(): void

  /**
   *@description 	Removes popup from the page
   */
  removePopup(): void
}
export default Popup
