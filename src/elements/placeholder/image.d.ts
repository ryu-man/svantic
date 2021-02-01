import { Component } from '../../component'
import { SvelteComponentTyped } from 'svelte'

interface ImageProps extends Component {
  header?: boolean
  square?: boolean
}
/**
 * Svantic Placeholder Image
 */
declare class Image extends SvelteComponentTyped<ImageProps> {}
export default Image
