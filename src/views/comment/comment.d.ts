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
export default class Comment extends SvelteComponentTyped<CommentProps> {
  static avatar: new () => Avatar
  static author: new () => Author
  static content: new () => Content
  static date: new () => Date
  static meta: new () => Meta
  static rating: new () => Rating
  static reply: new () => Reply
  static text: new () => Text
  static actions: new () => Actions
}
