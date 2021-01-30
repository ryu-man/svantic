import type { SvelteComponentTyped } from 'svelte'

interface ActionsProps {}

/**
 * @description Comment Actions
 * @example
 * <Comment.Actions>
 *  <a class="reply">Reply</a>
 *  <a class="save">Save</a>
 *  <a class="hide">Hide</a>
 *  <a>
 *    <Icon name="expand"></Icon>
 *    Full-screen
 *  </a>
 * </Comment.Actions>
 *
 */
export default class Actions extends SvelteComponentTyped<ActionsProps> {}
