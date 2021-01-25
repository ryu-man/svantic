import '../../../fomantic/dist/components/image.css'

import { default as Image } from './image.svelte'
import { default as ImageLink } from './link.svelte'
import { default as Images } from './images.svelte'

Image.Link = ImageLink

export { Image, Images }
export default Image
