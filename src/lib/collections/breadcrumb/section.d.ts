import type { SvelteComponentTyped } from 'svelte/internal'
import type { DOMEvents, MountEvent, SvanticProps } from '../../common'

type BreadcrumbSectionProps = SvanticProps & {
  active?: boolean
  as?: 'a' | 'div'
}

type BreadcrumbSectionEvents<T = HTMLLinkElement> = MountEvent<T> & {
  click: DOMEvents<T>['click']
}
/**
 * @description Breadcrumb section
 */
export default class Section extends SvelteComponentTyped<
  SectionProps,
  BreadcrumbSectionEvents
> {}
