import type { SvelteComponentTyped } from 'svelte'
import type { Component } from '../../component'

interface DateProps extends Component {}

type DateEvents = {
  mount: CustomEvent<HTMLDivElement>
}

export default class Date extends SvelteComponentTyped<DateProps, DateEvents> {}
