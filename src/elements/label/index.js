
import { default as Tag } from './tag.svelte'
import { default as Ribbon } from './ribbon.svelte'
import { default as Link } from './link.svelte'
import { default as Label } from './label.svelte'
import { default as Labels } from './labels.svelte'


Label.Tag = Tag
Label.Ribbon = Ribbon
Label.Link = Link

export { Label,Labels, Tag, Link, Ribbon }
export default Label
