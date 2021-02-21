import { SvelteComponentTyped } from 'svelte/internal'
import type { Align, Color, Float, VAlign, Wide } from 'src/variations'
import { Component } from '../../component'

interface RowProps extends Component {
  positive?: boolean
  negative?: boolean
  error?: boolean
  warning?: boolean
  active?: boolean
  disabled?: boolean
  color?: Color
  marked?: Float
  selectable?: boolean
  collapsing?: boolean
  wide?: Wide
  textAlign?: Align
  veticalAlign?: VAlign
  singleLine?: boolean
}
/**
 * @description Svantic Table Row
 */
declare class Row extends SvelteComponentTyped<RowProps> {}
export default Row
