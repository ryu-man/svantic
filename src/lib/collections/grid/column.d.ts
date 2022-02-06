import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Component } from '../../component'
import { Align, Color, Float, Wide } from '../../variations'
import {GridWide, Visibility} from './grid'

interface ColumnProps extends Component {
  class?: string
  style?: Style
  wide?: GridWide | GridWide[]
  floated?: Float
  aligned?: 'top'|'middle'|'bottom'
  color?: Color
  doubling?: boolean
  visibility?: Visibility
}
/**
 * Vomantic Grid Column
 */
declare class Column extends SvelteComponentTyped<ColumnProps> {}
export default Column
