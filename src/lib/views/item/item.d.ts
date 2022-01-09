import type { SvelteComponentTyped } from 'svelte'

import Content from './content'
import Image from './image'
import Link from './link'
import Description from './description'
import Extra from './extra'
import Header from './header'
import Meta from './meta'
import Rating from './rating'

interface ItemProps {
}
/**
 * @description An item view presents large collections of site content for display
 */
export default class Item extends SvelteComponentTyped<ItemProps> {
  static content: new () => Content
  static image: new () => Image
  static link: new () => Link
  static description: new () => Description
  static extra: new () => Extra
  static header: new () => Header
  static meta: new () => Meta
  static rating: new () => Rating
}
