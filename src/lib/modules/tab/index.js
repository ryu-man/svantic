import { default as Tabs } from './tabs.svelte'
import { default as Tab } from './tab.svelte'

export function init() {
    Tabs.Tab = Tab
}

export { Tab }
export default Tabs
