import type { Align, Float } from 'src/variations'
import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'
import type Item from './item'
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
 * List
 */
declare class List extends SvelteComponentTyped<ListProps> {
  static Item: new () => Item
}

export default List
