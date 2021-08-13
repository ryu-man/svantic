
import { default as Image } from './image.svelte'
import { default as Link } from './link.svelte'
import { default as Group } from './images.svelte'

export function init() {
    Image.Link = Link
    Image.Group = Group
}

export { Group , Link }
export default Image
