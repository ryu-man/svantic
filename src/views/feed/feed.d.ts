import type { Component } from 'src/component'
import type { SvelteComponentTyped } from 'svelte'
import type Content from './content'
import type Date from './date'
import type ExtraImages from './extra_images'
import type ExtraText from './extra_text'
import type Label from './label'

interface FeedProps extends Component {}

export default class Feed extends SvelteComponentTyped<FeedProps> {
  static Label: new () => Label
  static Content: new () => Content
  static Date: new () => Date
  static Extra: {
    Text: new () => ExtraText
    Images: new () => ExtraImages
  }
}
