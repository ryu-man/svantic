// import {SvelteComponentTyped} from 'svelte/internal'
import {SvelteComponentTyped} from 'svelte/internal'
import { Style } from '../../style'
import { Color, Float, Size } from '../../variations'
import { Component } from '../../component'

interface StatisticProps extends Component {
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
