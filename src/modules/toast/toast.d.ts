import { SvelteComponentTyped} from 'svelte/internal'
import type { Color } from '../../variations'
import { Module } from '../module'
import type Controller from './controller'
import {ToastSettings} from './settings'

declare type Type = 'toast' | 'message'

interface ToastProps extends Module<Controller, ToastSettings> {
  type?: Type
  color?: Color
  icon?: boolean
}
/**
 * Svantic Toast
 */
declare class Toast extends SvelteComponentTyped<ToastProps> {}
export default Toast
