import Dropdown from './dropdown.svelte'
import Select from './select.svelte'
import Header from './header.svelte'
import Menu from './menu.svelte'
import Item from './item.svelte'
import Divider from './divider.svelte'
import Text from './text.svelte'

Dropdown.select = Select
Dropdown.header = Header
Dropdown.divider = Divider
Dropdown.menu = Menu
Dropdown.item = Item
Dropdown.text = Text

export { Dropdown, Select, Header, Divider, Menu, Item, Text }
export default Dropdown
