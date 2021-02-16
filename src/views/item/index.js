
import { default as Items } from './items.svelte'
import { default as Item } from './item.svelte'
import { default as Content } from './content.svelte'
import { default as Image } from './image.svelte'
import { default as Link } from './link.svelte'
import { default as Description } from './description.svelte'
import { default as Extra } from './extra.svelte'
import { default as Header } from './header.svelte'
import { default as Meta } from './meta.svelte'
import { default as Rating } from './rating.svelte'

Item.content = Content
Item.image = Image
Item.link = Link
Item.description = Description
Item.extra = Extra
Item.header = Header
Item.meta = Meta
Item.rating = Rating

export { Items, Item, Content, Description, Extra, Header, Image, Link, Meta, Rating }
export default Item


