import { default as Feed } from './feed.svelte'
import { default as Content } from './content.svelte'
import { default as Date } from './date.svelte'
import { default as ExtraImages } from './extra_images.svelte'
import { default as ExtraText } from './extra_text.svelte'
import { default as Label } from './label.svelte'

export function init() {
    Feed.Label = Label
    Feed.Content = Content
    Feed.Date = Date
    Feed.ExtraText = ExtraText
    Feed.ExtraImages = ExtraImages
}

export { Content, Date, ExtraImages, ExtraText, Label }
export default Feed
