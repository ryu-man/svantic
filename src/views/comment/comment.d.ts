import type { SvelteComponentTyped } from 'svelte'
import type Avatar from './avatar'
import type Author from './author'
import type Content from './content'
import type MetaData from './meta_data'
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
  static metaData: new () => MetaData
  static rating: new () => Rating
  static reply: new () => Reply
  static text: new () => Text
  static actions: new () => Actions
}
