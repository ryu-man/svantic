import { SvelteComponentTyped } from 'svelte/internal'
import type { Align, Color, Float, Wide, VAlign} from 'src/variations'
import { Component } from '../../component'

interface CellProps extends Component {
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
 * @description
 */
declare class Cell extends SvelteComponentTyped<CellProps> {}
export default Cell
