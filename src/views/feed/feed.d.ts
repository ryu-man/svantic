import type { Component } from 'src/component'
import type { SvelteComponentTyped } from 'svelte'
import type Content from './content'
import type Date from './date'
import type ExtraImages from './extra_images'
import type ExtraText from './extra_text'
import type Label from './label'

interface FeedProps extends Component {}

export default class Feed extends SvelteComponentTyped<FeedProps> {
  static label: new () => Label
  static content: new () => Content
  static date: new () => Date
  static extra: {
    text: new () => ExtraText
    images: new () => ExtraImages
  }
}
