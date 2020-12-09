import { default as Menu } from './menu.svelte'
import { default as MenuItem } from './item.svelte'

Menu.item = MenuItem

export {Menu, MenuItem}
export default Menu
