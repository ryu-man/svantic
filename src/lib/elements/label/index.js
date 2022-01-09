import { default as Label } from './label.svelte'
import { default as Tag } from './tag.svelte'
import { default as Ribbon } from './ribbon.svelte'
import { default as Link } from './link.svelte'
import { default as Detail } from './detail.svelte'
import { default as Group } from './labels.svelte'

export function init() {
    // @ts-ignore
    Label.Tag = Tag
    // @ts-ignore
    Label.Ribbon = Ribbon
    // @ts-ignore
    Label.Link = Link
    // @ts-ignore
    Label.Detail = Detail
    // @ts-ignore
    Label.Group = Group
}

export { Group, Tag, Link, Ribbon, Detail }
export default Label
