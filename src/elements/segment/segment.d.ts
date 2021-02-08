import { SvelteComponentTyped } from 'svelte/internal'
import { Float, Align, Attach, Color } from '../../variations'
import { Component } from '../../component'

interface SegmentProps extends Component {
  raised?: boolean
  placeholder?: boolean
  stacked?: boolean
  piled?: boolean
  vertical?: boolean
  loading?: boolean
  disabled?: boolean
  secondary?: boolean
  tertiary?: boolean
  floated?: Float
  attached?: Attach
  aligned?: Align
  color?: Color
  tall?: boolean
  double?: boolean
  inverted?: boolean
  padded?: boolean
  fitted?: boolean
  compact?: boolean
  circular?: boolean
  clearing?: boolean
  basic?: boolean
  blurring?: boolean
  dimmed?: boolean
  container?: boolean
}
/**
 * Vomantic Segment
 */
declare class Segment extends SvelteComponentTyped<SegmentProps> {}
export default Segment
