import type { SvelteComponentTyped } from 'svelte'
import type { Component } from 'src/component'
import type Avatar from './avatar'
import type Author from './author'
import type Content from './content'
import type Meta from './meta'
import type Date from './date'
import type Rating from './rating'
import type Reply from './reply'
import type Text from './text'
import type Actions from './actions'

interface CommentProps extends Component {}

type CommentEvents = {
  mount: CustomEvent<HTMLDivElement>
}
export default class Comment extends SvelteComponentTyped<
  CommentProps,
  CommentEvents
> {
  static Avatar: new () => Avatar
  static Author: new () => Author
  static Content: new () => Content
  static Date: new () => Date
  static Meta: new () => Meta
  static Rating: new () => Rating
  static Reply: new () => Reply
  static Text: new () => Text
  static Actions: new () => Actions
}
