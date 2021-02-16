import '../../../semantic/dist/components/comment.css'

import { default as Comments } from './comments.svelte'
import { default as Comment } from './comment.svelte'
import { default as Avatar } from './avatar.svelte'
import { default as Author } from './author.svelte'
import { default as Content } from './content.svelte'
import { default as MetaData } from './meta_data.svelte'
import { default as Date } from './date.svelte'
import { default as Rating } from './rating.svelte'
import { default as Reply } from './reply.svelte'
import { default as Text } from './text.svelte'
import { default as Actions } from './actions.svelte'

Comment.avatar = Avatar
Comment.author = Author
Comment.content = Content
Comment.date = Date
Comment.metaData = MetaData
Comment.rating = Rating
Comment.reply = Reply
Comment.text = Text
Comment.actions = Actions

export { Comment, Comments, Avatar, Author, Content, MetaData, Date, Rating, Reply, Text, Actions }
export default Comment