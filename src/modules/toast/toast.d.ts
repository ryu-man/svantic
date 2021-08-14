import { SvelteComponentTyped } from 'svelte/internal'
import { Color } from '../../variations'
import Module from '../module'
import ToastSettings from './settings'

declare type Type = 'toast' | 'message'

interface ToastProps extends Module<ToastSettings> {
  type?: Type
  color?: Color
  icon?: boolean
}
/**
 * Vomantic Toast
 */
declare class Toast extends SvelteComponentTyped<ToastProps> {}
export default Toast
