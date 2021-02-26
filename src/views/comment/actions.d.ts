import type { SvelteComponentTyped } from 'svelte'
import type { Component } from "../../component";

interface ActionsProps extends Component{}

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
 */
export default class Actions extends SvelteComponentTyped<ActionsProps> {}
