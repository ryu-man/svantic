import type { SvelteComponentTyped } from 'svelte'
import type { Size } from 'src/variations'
import type { Component } from '../../component'

interface CommentsProps extends Component {
  // Comments can be collapsed, or hidden from view
  collapsed?: boolean
  // A comment list can be threaded to showing the relationship between conversations
  threaded?: boolean
  // Comments can hide extra information unless a user shows intent to interact with a comment.
  minimal?: boolean
  // Comments can have different sizes
  size?: Size
  // Comments's colors can be inverted
  inverted?: boolean
}

type CommentEvents = {
  mount: CustomEvent<HTMLDivElement>
}

/**
 * @description A basic list of comments
 * @example
 * <Comments collapsed threaded minimal inverted size="small">
 *    <Comment></Comment>
 * </Comments>
 */
export default class Comments extends SvelteComponentTyped<
  CommentsProps,
  CommentEvents
> {}
