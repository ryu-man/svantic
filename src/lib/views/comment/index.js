import { default as Comments } from './comments.svelte'
import { default as Comment } from './comment.svelte'
import { default as Avatar } from './avatar.svelte'
import { default as Author } from './author.svelte'
import { default as Content } from './content.svelte'
import { default as Meta } from './meta.svelte'
import { default as Date } from './date.svelte'
import { default as Rating } from './rating.svelte'
import { default as Reply } from './reply.svelte'
import { default as Text } from './text.svelte'
import { default as Actions } from './actions.svelte'

export function init() {
  Comment.Avatar = Avatar
  Comment.Author = Author
  Comment.Content = Content
  Comment.Date = Date
  Comment.Meta = Meta
  Comment.Rating = Rating
  Comment.Reply = Reply
  Comment.Text = Text
  Comment.Actions = Actions
  Comment.Group = Comments
}

export {
  Comments as Group,
  Avatar,
  Author,
  Content,
  Meta,
  Date,
  Rating,
  Reply,
  Text,
  Actions
}

export default Comment
