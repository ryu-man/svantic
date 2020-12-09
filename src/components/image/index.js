import { default as Image } from './image.svelte'
import { default as ImageLink } from './link.svelte'
import { default as Images } from './images.svelte'

 Image.link = ImageLink
 
 export {Image, ImageLink, Images}
 export default Image
