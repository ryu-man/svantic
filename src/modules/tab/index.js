import { default as TabMenu } from './tabular_menu.svelte'
import { default as Tab } from './tab.svelte'
import { default as Item } from './item.svelte'

TabMenu.Tab = Tab
TabMenu.Item = Item

export { TabMenu, Tab, Item }
export default TabMenu
