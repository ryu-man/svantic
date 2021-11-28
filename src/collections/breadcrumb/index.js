import { default as Breadcrumb } from './breadcrumb.svelte'
import { default as Section } from './section.svelte'
import { default as Divider } from './divider.svelte'

export function init() {
    // @ts-ignore
    Breadcrumb.Section = Section
    // @ts-ignore
    Divider.Divider = Divider
}

export { Section, Divider }
export default Breadcrumb
