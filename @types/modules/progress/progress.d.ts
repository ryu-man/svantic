import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { SharedProps } from '../../shared_props'
import { Attach, Color, Size, Speed } from '../../variations'

type Type = 'standard' | 'indicating'
type State =
  | 'indeterminate'
  | 'swinging indeterminate'
  | 'sliding indeterminate'
  | 'filling indeterminate'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'success'
  | 'active'

interface ProgressProps extends SharedProps {
  class?: string
  type: Type
  attached: Attach
  speed: Speed
  state: State
  size: Size
  color: Color
  value: number
  total: number
  inverted: boolean
  style?: Style
}

/**
 * Vomantic Progress
 */
export default class Progress extends SvelteComponentTyped<ProgressProps> {}
