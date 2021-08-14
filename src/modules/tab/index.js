import { default as Tabs } from './tabular_menu.svelte'
import { default as Tab } from './tab.svelte'

export function init() {
    Tabs.Tab = Tab
}

export { Tab, Item }
export default Tabs
