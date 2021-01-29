import { default as Breadcrumb } from './breadcrumb.svelte'
import { default as Section } from './section.svelte'
import { default as Divider } from './divider.svelte'

Breadcrumb.Section = Section
Divider.Divider = Divider

export { Breadcrumb, Section, Divider }
export default Breadcrumb