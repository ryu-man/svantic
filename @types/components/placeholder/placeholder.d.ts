import { Style } from '../../style'
import { SharedProps } from '../../shared_props'
import { SvelteComponentTyped} from 'svelte'
import Header from './header'
import Paragraph from './paragraph'
import Image from './image'
import Line from './line'

interface PlaceholderProps extends SharedProps {
  inverted?: boolean
}
/**
 * Sveltic Placeholder
 */
export default class Placeholder extends SvelteComponentTyped<PlaceholderProps> {
  static header: Header
  static image: Image
  static paragraph: Paragraph
  static line: Line
}
