import type { SvelteComponentTyped } from 'svelte'
import type { Component } from '../../component'

interface AvatarProps extends Component {}

type AvatarEvents = {
  mount: CustomEvent<HTMLDivElement>
}

/**
 * @description Comment avatar
 * @example
 * <Comment.avatar>
 *      <img src="/path"/>
 * </Comment.avatar>
 */
export default class Avatar extends SvelteComponentTyped<
  AvatarProps,
  AvatarEvents
> {}
