import { default as TabMenu } from './tabular_menu.svelte'
import { default as Tab } from './tab.svelte'
import { default as Item } from './item.svelte'
import {default as TabController} from './controller'

// TabMenu.Tab = Tab
// TabMenu.Item = Item

export { TabMenu, Tab, Item, TabController }
export default {default:TabMenu, tab:Tab, item:Item}
