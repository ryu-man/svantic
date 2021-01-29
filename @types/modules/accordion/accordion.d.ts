import type { Style } from '../../style'
import { SvelteComponentTyped } from 'svelte/internal'
import { Module } from '../module'
import Controller from './controller'
import {AccordionSettings} from './settings'
interface AccordionProps extends Module<Controller, AccordionSettings> {
  class?: string
  active?: boolean
  disabled?: boolean
  fluid?: boolean
  circular?: boolean
  loading?: boolean
  primary?: boolean
  secondary?: boolean
  compact?: boolean
  basic?: boolean
  toggle?: boolean
  positive?: boolean
  negative?: boolean
  tertiary?: boolean
  inverted?: boolean
  icon?: boolean
  style?: Style
}
/**
 * Vomantic Accordion
 */
declare class Accordion extends SvelteComponentTyped<AccordionProps> {}
export default Accordion
