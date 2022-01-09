import { SvelteComponentTyped } from 'svelte/internal'
import Tab from './tab.svellte'
import {Module} from '../utils'
import TabularMenuSettings from './settings'
import type { MountEvent } from '../../common'

interface TabularMenuProps extends Module<TabularMenuSettings> {
  attached?: string
  loading?: boolean
  segment?: boolean
  active?: boolean
}

export const key: symbol
/**
 * Vomantic TabularMenu
 */
export default class TabularMenu extends SvelteComponentTyped<TabularMenuProps> {
  static Tab: new () => Tab

  ready(): Promise<void>
}
