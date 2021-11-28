import { SvelteComponentTyped } from 'svelte/internal'
import { Wide } from '../../variations'
import type { MountEvent, SvanticEvents, SvanticProps } from '../../common'

declare type State = 'info' | 'warning' | 'error' | 'success' | 'disabled'

type FieldProps = SvanticProps & {
  state?: State
  wide?: Wide
  inline?: boolean
  disabled?: boolean
  required?: boolean
}

type FieldEvents = MountEvent<HTMLDivElement>

/**
 * @description Form field
 */
declare class Field extends SvelteComponentTyped<FieldProps, FieldEvents> {}
export default Field
