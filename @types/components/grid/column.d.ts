import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { SharedProps } from '../../shared_props'
import { Align, Color, Float, Wide } from '../../variations'
import {GridWide, Visibility} from './grid'

interface ColumnProps extends SharedProps {
  class?: string
  style?: Style
  wide?: GridWide | GridWide[]
  floated?: Float
  aligned?: Align
  color?: Color
  doubling?: boolean
  visibility?: Visibility
}
/**
 * Vomantic Grid Column
 */
declare class Column extends SvelteComponentTyped<ColumnProps> {}
export default Column
