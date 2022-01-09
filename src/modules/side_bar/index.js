import { default as Sidebar } from './side_bar.svelte'
import { default as Item } from './item.svelte'
import { default as Pusher } from './Pusher.svelte'

export function init() {
    // @ts-ignore
    Sidebar.Item = Item
    // @ts-ignore
    Sidebar.Pusher = Pusher
}

export { Item, Pusher }
export default Sidebar
