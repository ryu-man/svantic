import type { SvelteComponentTyped } from 'svelte'
import type { Component } from '../../component'

interface ActionsProps extends Component {}
type ActionsEvents = {
  mount: CustomEvent<HTMLDivElement>
}

/**
 * @description Comment Actions
 * @example
 * <Comment.actions>
 *      <a class="reply">Reply</a>
 *      <a class="save">Save</a>
 *      <a class="hide">Hide</a>
 *      <a>
 *        <Icon name="expand"></Icon>
 *        Full-screen
 *      </a>
 * </Comment.actions>
 *  
 * <CommentActions>
 *      <a class="reply">Reply</a>
 *      <a class="save">Save</a>
 *      <a class="hide">Hide</a>
 *      <a>
 *        <Icon name="expand"></Icon>
 *        Full-screen
 *      </a>
 * </CommentActions>
 */
export default class Actions extends SvelteComponentTyped<
  ActionsProps,
  ActionsEvents
> {}
