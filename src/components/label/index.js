import { default as Tag } from './tag.svelte'
import { default as Ribbon } from './ribbon.svelte'
import { default as Link } from './link.svelte'
import { default as Label } from './label.svelte'
export { default as Labels } from './labels.svelte'


Label.tag = Tag
Label.ribbon = Ribbon
Label.link = Link

export { Tag, Ribbon, Link, Label }
export default Label
