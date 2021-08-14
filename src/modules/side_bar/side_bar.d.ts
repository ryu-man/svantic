import { SvelteComponentTyped } from 'svelte/internal'
import type { Attach, Wide } from '../../variations'
import Module from '../module'
import SidebarSettings from './settings'

interface SidebarProps extends Module<SidebarSettings> {
  wide?: Wide
  visible?: boolean
  dimmed?: boolean
  direction?: Attach
  inverted?: boolean
  vertical?: boolean
}
/**
 * @description Svantic Sidebar
 */
declare class Sidebar extends SvelteComponentTyped<SidebarProps> {
  /**
   *@description 	Attaches sidebar action to given selector. Default event if none specified is toggle
   */
  attachEvents(selector: HTMLElement, event: any): void

  /**
   *@description 	Shows sidebar
   */
  show(): void

  /**
   *@description 	Hides sidebar
   */
  hide(): void

  /**
   *@description 	Toggles visibility of sidebar
   */
  toggle(): void

  /**
   *@description 	Returns whether sidebar is visible
   */
  isVisible(): Promise<boolean>

  /**
   *@description 	Returns whether sidebar is hidden
   */
  isHidden(): Promise<boolean>

  /**
   *@description 	Pushes page content to be visible alongside sidebar
   */
  pushPage(): void

  /**
   *@description 	Returns direction of current sidebar
   */
  getDirection(): Promise<any>

  /**
   *@description 	Returns page content to original position
   */
  pullPage(): Promise<any>

  /**
   *@description 	Adds stylesheet to page head to trigger sidebar animations
   */
  addBodyCSS(): void

  /**
   *@description 	Removes any inline stylesheets for sidebar animation
   */
  removeBodyCSS(): void

  /**
   *@description 	Returns vendor prefixed transition end event
   */
  getTransitionEvent(): Promise<any>
}
export default Sidebar
