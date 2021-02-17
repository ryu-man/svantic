import { default as Tag } from './tag.svelte'
import { default as Ribbon } from './ribbon.svelte'
import { default as Link } from './link.svelte'
import { default as Label } from './label.svelte'
import { default as Labels } from './labels.svelte'
import { default as Detail } from './detail.svelte'

Label.Tag = Tag
Label.Ribbon = Ribbon
Label.Link = Link
Label.detail = Detail

export { Label, Labels, Tag, Link, Ribbon }
export default Label
