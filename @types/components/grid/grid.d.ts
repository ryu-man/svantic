import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { SharedProps } from '../../shared_props'
import { Wide } from '../../variations'

type GridType =
  | 'divided'
  | 'vertically divided'
  | 'celled'
  | 'internally celled'
type Reversed = `${'computer' | 'mobile' | 'tablet'}${' vertically' | ''}`
export type GridWide = `${Wide}${' computer' | ' mobile' | ' tablet' | ''}`
export type Visibility = `${
  | 'computer'
  | 'mobile'
  | 'tablet'
  | 'large screen'
  | 'wide screen'}${' only' | ''}`
interface GridProps extends SharedProps {
  class?: string
  style?: Style
  type?: GridType
  relaxed?: boolean
  padded?: boolean
  equal?: boolean
  container?: boolean
  stackable?: boolean
  reversed?: Reversed
}
/**
 * Vomantic Grid
 */
declare class Grid extends SvelteComponentTyped<GridProps> {}
export default Grid