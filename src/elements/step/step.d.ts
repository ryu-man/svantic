import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Component } from '../../component'
import type { Icons } from '../icon/icon.svelte'

declare type State = 'completed' | 'active' | 'disabled'
interface StepProps extends Component {
  completed?: boolean
  active?: boolean
  disabled?: boolean
  link?: boolean
  href?: string
  as?: 'div'|'a'
  icon?: Icons
}
/**
 * Vomantic Step
 */
export default class Step extends SvelteComponentTyped<StepProps> {}
