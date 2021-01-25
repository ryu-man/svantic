import { SharedProps } from '../../shared_props'
import { SvelteComponentTyped } from 'svelte'

interface ImageProps extends SharedProps {
  header?: boolean
  square?: boolean
}
/**
 * Vomantic Placeholder Image
 */
declare class Image extends SvelteComponentTyped<ImageProps> {}
export default Image
