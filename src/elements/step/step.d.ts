import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Component } from '../../component'
import type { Icons } from '../icon/icon.svelte'
import type Group from './steps'

declare type State = 'completed' | 'active' | 'disabled'
interface StepProps extends Component {
  completed?: boolean
  active?: boolean
  disabled?: boolean
  link?: boolean
  href?: string
  as?: 'div' | 'a'
  icon?: Icons
}
/**
 * Step
 */
export default class Step extends SvelteComponentTyped<StepProps> {
  static Group: new () => Group
}
