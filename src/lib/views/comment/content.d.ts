import type { SvelteComponentTyped } from 'svelte'
import type { Component } from '../../component'

interface ContentProps extends Component {}

type ContentEvents = {
  mount: CustomEvent<HTMLDivElement>
}

/**
 * @description Comment content
 * @example
 * <Comment>
 *      <Comment.content>
 *      </Comment.content>
 * </Comment>
 */
export default class Content extends SvelteComponentTyped<
  ContentProps,
  ContentEvents
> {}
