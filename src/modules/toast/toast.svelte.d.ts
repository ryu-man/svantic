import { SvelteComponentTyped } from 'svelte/internal'
import { Color } from '../../variations'
import { Module } from '../utils'
import { ToastSettings } from './settings'
import type { MountEvent } from '../../common'

declare type Type = 'toast' | 'message'

interface ToastProps extends Module<ToastSettings> {
  type?: Type
  color?: Color
  icon?: boolean
}
/**
 * Svantic Toast
 */
declare class Toast extends SvelteComponentTyped<ToastProps> {
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
  getToasts(): Promise<any[]>

  /**
   *@description 	Returns the remaining time in milliseconds
   */
  getRemainingTime(): Promise<number>

  ready(): Promise<void>
}
export default Toast
