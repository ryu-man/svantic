export { default as DropdownController } from './controller'
import { default as Dropdown } from './dropdown.svelte'
import { default as Select } from './select.svelte'
import Header from './header.svelte'
import Menu from './menu.svelte'
import Item from './item.svelte'
import Divider from './divider.svelte'
import Text from './text.svelte'

Dropdown.select = Select
Dropdown.select = Dropdown
Dropdown.header = Header
Dropdown.divider = Divider
Dropdown.menu = Menu
Dropdown.item = Item
Dropdown.text = Text

export { Dropdown, Select, Header, Divider, Menu, Item, Text }
export default Dropdown
