import { SvelteComponentTyped } from 'svelte/internal'
import { SharedProps } from '../../shared_props'

interface ItemProps extends SharedProps{
  data?: string
}
/**
 * Vomantic TabularMenuItem
 */
export default class Item extends SvelteComponentTyped<ItemProps> {}
