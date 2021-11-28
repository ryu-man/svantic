import { default as Menu } from './menu.svelte'
import { default as Item } from './item.svelte'

export function init() {
    // @ts-ignore
    Menu.item = Item
}

export { Item }
export default Menu
