import type { SvelteComponentTyped } from 'svelte'

interface ItemsProps {
  unstackable?: boolean
  divided?: boolean
  relaxed?: boolean
  link?: boolean
  inverted?: boolean
}
/**
 * @description A group of items
 */
export default class Items extends SvelteComponentTyped<ItemsProps> {}
