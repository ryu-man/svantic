import type { SvelteComponentTyped } from 'svelte/internal'
import type { Style } from '../../style'
import type { Component } from '../../component'
import type { MountEvent, SvanticProps } from '../../common'
import Section from './section'
import Divider from './divider'
import type { Size } from 'src/variations'

type BreadcrumbProps = SvanticProps & {
  size?: Size
  inverted?: boolean
}

type BreadcrumbEvents = MountEvent<HTMLDivElement>

/**
 * @description Breadcrumb
 */
export default class Breadcrumb extends SvelteComponentTyped<
  BreadcrumbProps,
  BreadcrumbEvents
> {
  static Section: new () => Section
  static Divider: new () => Divider
}
