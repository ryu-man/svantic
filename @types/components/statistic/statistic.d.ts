// import {SvelteComponentTyped} from 'svelte/internal'
import {SvelteComponentTyped} from 'svelte/internal'
import { Style } from '../../style'
import { Color, Float, Size } from '../../variations'
import { SharedProps } from '../../shared_props'

interface StatisticProps extends SharedProps {
  class?: string
  style?: Style
  color?: Color
  size?: Size
  floated?: Float
  stackable?: boolean
  inverted?: boolean
  horizontal?: boolean
}
/**
 * Vomantic Statistic
 */
export default  class Statistic extends SvelteComponentTyped<StatisticProps> {}
