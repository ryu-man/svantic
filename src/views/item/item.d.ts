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
  static Content: new () => Content
  static Image: new () => Image
  static Link: new () => Link
  static Description: new () => Description
  static Extra: new () => Extra
  static Header: new () => Header
  static Meta: new () => Meta
  static Rating: new () => Rating
}
