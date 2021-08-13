import { default as List } from './list.svelte'
import { default as Item } from './item.svelte'


export function init() {
    List.item = Item
}

export { Item }
export default List
