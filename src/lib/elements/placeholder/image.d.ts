import { Component } from '../../component'
import { SvelteComponentTyped } from 'svelte'

interface ImageProps extends Component {
  header?: boolean
  square?: boolean
}
/**
 * Vomantic Placeholder Image
 */
declare class Image extends SvelteComponentTyped<ImageProps> {}
export default Image
