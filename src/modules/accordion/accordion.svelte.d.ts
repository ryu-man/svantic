import type { Style } from '../../style'
import { SvelteComponentTyped } from 'svelte/internal'
import Module from '../module'
import AccordionSettings from './setting'
import Title from './title.svelte'
import Content from './content.svelte'

interface AccordionProps extends Module<AccordionSettings> {
  fluid?: boolean
  vertical?:boolean 
  following?:boolean 
  text?:boolean 
  menu?:boolean
  styled ?: boolean
  inverted ?: boolean
}
/**
 * @description An accordion allows users to toggle the display of sections of content
 */
declare class Accordion extends SvelteComponentTyped<AccordionProps> {
  static title: new()=> Title
  static content: new()=> Content
}
export default Accordion
