import { default as TabMenu } from './tabular_menu.svelte'
import { default as Tab } from './tab.svelte'
import { default as TabItem } from './item.svelte'

TabMenu.tab = Tab
TabMenu.item = TabItem

export { TabMenu, Tab, TabItem }
