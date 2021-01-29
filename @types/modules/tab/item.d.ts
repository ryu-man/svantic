import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'

interface ItemProps extends Component{
  data?: string
}
/**
 * Vomantic TabularMenuItem
 */
export default class Item extends SvelteComponentTyped<ItemProps> {}
