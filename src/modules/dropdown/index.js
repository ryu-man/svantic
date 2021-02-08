export { default as DropdownController } from './controller'
import { default as Dropdown } from './dropdown.svelte'
import { default as Select } from './select.svelte'

Dropdown.select = Select

export { Dropdown, Select }
export default Dropdown
