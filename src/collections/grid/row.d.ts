import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Component } from '../../component'
import { Align } from '../../variations'
import { GridWide, Visibility } from './grid'
type GridType =
  | 'divided'
  | 'vertically divided'
  | 'celled'
  | 'internally celled'

interface RowProps extends Component {
  class?: string
  style?: Style
  type?: GridType
  column?: GridWide | GridWide[]
  equal?: boolean
  aligned?: 'top'|'middle'|'bottom'
  visibility?: Visibility
}
/**
 * Vomantic Grid Row
 */
declare class Row extends SvelteComponentTyped<RowProps> {}
export default Row
