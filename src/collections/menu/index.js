import { default as Menu } from './menu.svelte'
import { default as Item } from './item.svelte'

Menu.item = Item

export {Menu, Item}
export default Menu
