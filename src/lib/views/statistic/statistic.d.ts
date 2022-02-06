// import {SvelteComponentTyped} from 'svelte/internal'
import {SvelteComponentTyped} from 'svelte/internal'
import { Style } from '../../style'
import { Color, Float, Size } from '../../variations'
import { Component } from '../../component'
import Label from './label'
import Value from './value'

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
 * @description 
 */
export default class Statistic extends SvelteComponentTyped<StatisticProps> {
  static label: new ()=> Label
  static value: new ()=> Value
}
