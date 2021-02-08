import { SvelteComponentTyped } from 'svelte/internal'
import type { Attach, Wide } from '../../variations'
import { Module } from '../module'
import Controller from './controller'
import { SidebarSettings } from './settings'

interface SidebarProps extends Module<Controller, SidebarSettings> {
  wide?: Wide
  visible?: boolean
  dimmed?: boolean
  direction?: Attach
  visible?: boolean
  dimmed?: boolean
  inverted?: boolean
  vertical?: boolean
}
/**
 * Vomantic Sidebar
 */
declare class Sidebar extends SvelteComponentTyped<SidebarProps> {}
export default Sidebar
