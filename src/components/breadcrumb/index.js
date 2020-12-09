import { default as Breadcrumb } from './breadcrumb.svelte'
import { default as BreadcrumbSection } from './section.svelte'
import { default as BreadcrumbDivider } from './divider.svelte'

Breadcrumb.section = BreadcrumbSection
BreadcrumbDivider.divider = BreadcrumbDivider

export { Breadcrumb, BreadcrumbDivider, BreadcrumbSection }
export default Breadcrumb