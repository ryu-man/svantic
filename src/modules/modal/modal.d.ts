import { SvelteComponentTyped } from 'svelte/internal'
import { Module } from '../module'
import Controller from './controller'
import { ModalSettings } from './settings'
import Header from './header'
import Content from './content'
import Actions from './actions'
import Description from './description.svelte'
interface ModalProps extends Module<Controller, ModalSettings> {
  size?: string
  basic?: boolean
  active?: boolean
  overlay?: boolean
  inverted?: boolean
  fullscreen?: boolean
}
/**
 * Svantic Modal
 */
declare class Modal extends SvelteComponentTyped<ModalProps> {
  static header: new () => Header
  static content: new () => Content
  static actions: new () => Actions
  static description: new () => Description

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
export default Modal
