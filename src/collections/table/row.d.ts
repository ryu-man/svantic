import { SvelteComponentTyped } from 'svelte/internal'
import type { Color, Float } from 'src/variations'
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
}
/**
 * @description
 */
declare class Row extends SvelteComponentTyped<RowProps> {}
export default Row
