import { SvelteComponentTyped} from 'svelte/internal'
import type { SharedProps } from '../../shared_props'
import type { Color } from '../../variations'
import type Controller from './controller'
declare type Type = 'toast' | 'message'

interface ToastProps extends SharedProps {
  type?: Type
  color?: Color
  icon?: boolean
  onMount?: (controller: Controller) => void
}
/**
 * Sveltic Toast
 */
declare class Toast extends SvelteComponentTyped<ToastProps> {}
export default Toast
