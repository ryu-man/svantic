import { SvelteComponentTyped } from 'svelte/internal'
import type { Style } from '../../style'
import type { Wide } from '../../variations'
import type { Component } from '../../component'
import type { MountEvent, SvanticProps } from '../../common'

type FieldsProps = SvanticProps & {
  wide?: Wide
  equal?: boolean
  inline?: boolean
  grouped?: boolean
}

type FieldsEvents = MountEvent<HTMLDivElement>
/**
 * @description Form fields
 */
declare class Fields extends SvelteComponentTyped<FieldsProps, FieldsEvents> {}
export default Fields
