import type { SvelteComponentTyped } from 'svelte'
import type Extra from './extra'

/**
 * @description An item can contain content
 */
export default class Content extends SvelteComponentTyped {
  static Extra: new () => Extra
}
