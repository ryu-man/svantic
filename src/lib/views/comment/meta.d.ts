import type { SvelteComponentTyped } from 'svelte'
import type { Component } from '../../component'

interface MetaProps extends Component {}

type MetaEvents = {
  mount: CustomEvent<HTMLDivElement>
}

export default class Meta extends SvelteComponentTyped<MetaProps, MetaEvents> {}
