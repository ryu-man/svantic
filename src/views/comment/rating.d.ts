import type { SvelteComponentTyped } from 'svelte'
import type { Component } from '../../component'

interface RatingProps extends Component {}

type RatingEvents = {
  mount: CustomEvent<HTMLDivElement>
}

export default class Rating extends SvelteComponentTyped<
  RatingProps,
  RatingEvents
> {}
