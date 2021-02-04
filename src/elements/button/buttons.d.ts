import { SvelteComponentTyped } from 'svelte/internal'
import type { Component } from '../../component'
import type { Color, Float, Size, Wide } from '../../variations'
interface ButtonsProps extends Component {
  color?: Color
  icon?: boolean
  vertical?: boolean
  labeled?: boolean|Float
  basic?: boolean
  size?: Size
  width?: Wide
}
/**
 * Vomantic Buttons
 */
declare class Buttons extends SvelteComponentTyped<ButtonsProps> {}
export default Buttons
