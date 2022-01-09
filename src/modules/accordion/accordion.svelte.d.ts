import type { SvelteComponentTyped } from 'svelte/internal'
import type { Module } from '../utils'
import type { AccordionSettings } from './setting'
import type Title from './title.svelte'
import type Content from './content.svelte'
import type { MountEvent } from '../../common'
interface AccordionProps extends Module<AccordionSettings> {
  fluid?: boolean
  vertical?: boolean
  following?: boolean
  text?: boolean
  menu?: boolean
  styled?: boolean
  inverted?: boolean
}

type AccordionEvents = MountEvent<HTMLDivElement>
/**
 * @description An accordion allows users to toggle the display of sections of content
 */
declare class Accordion extends SvelteComponentTyped<
  AccordionProps,
  AccordionEvents
> {
  static Title: new () => Title
  static Content: new () => Content

  /**
   *@description 	Refreshes all cached selectors and data
   */
  refresh(): void

  /**
   *@description 	Opens accordion content at index
   */
  open(index: number): void

  /**
   *@description 	Closes accordion content that are not active
   */
  closeOthers(): void

  /**
   *@description 	Closes accordion content at index
   */
  close(index: number): void

  /**
   *@description 	Toggles accordion content at index
   */
  toggle(index: number): void

  ready(): Promise<void>
}
export default Accordion
