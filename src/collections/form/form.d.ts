import type { SvelteComponentTyped } from 'svelte/internal'
import type { Size } from '../../variations'
import type { MountEvent, SvanticProps } from '../../common'
import Field from './field'
import Fields from './fields'

declare type State = 'info' | 'warning' | 'error' | 'success' | 'loading'

type FormProps = SvanticProps & {
  state?: State
  size?: Size
  inverted?: boolean
  equal?: boolean
}

type FormEvents = MountEvent<HTMLFormElement>

/**
 * @description Form
 */
declare class Form extends SvelteComponentTyped<FormProps, FormEvents> {
  static Field: new () => Field
  static Fields: new () => Fields
}
export default Form
