import type { Align, Float } from 'src/variations'
import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'

interface ListProps extends Component {
  aligned?: Align
  floated?: Float
  bulleted?: boolean
  ordered?: boolean
  link?: boolean
  horizontal?: boolean
  inverted?: boolean
  selection?: boolean
  animated?: boolean
  relaxed?: boolean
  divided?: boolean
  celled?: boolean
}
/**
 * Vomantic List
 */
declare class List extends SvelteComponentTyped<ListProps> {}
export default List
