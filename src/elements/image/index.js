
import { default as Image } from './image.svelte'
import { default as Link } from './link.svelte'
import { default as Group } from './images.svelte'

export function init() {
    // @ts-ignore
    Image.Link = Link
    // @ts-ignore
    Image.Group = Group
}

export { Group , Link }
export default Image
