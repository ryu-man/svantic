import Dropdown from './dropdown.svelte'
import Select from './select.svelte'
import Header from './header.svelte'
import Menu from './menu.svelte'
import Item from './item.svelte'
import Divider from './divider.svelte'
import Text from './text.svelte'

export function init() {
    Dropdown.Select = Select
    Dropdown.Header = Header
    Dropdown.Menu = Menu
    Dropdown.Item = Item
    Dropdown.Divider = Divider
    Dropdown.Text = Text
}

export { Select, Header, Divider, Menu, Item, Text }
export default Dropdown
