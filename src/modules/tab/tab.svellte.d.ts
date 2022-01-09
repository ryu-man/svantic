import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'

interface TabProps extends Component {
  attached: string
  active: boolean
  segment: boolean
  tab: string
}
/**
 * Vomantic Tab
 */
export default class Tab extends SvelteComponentTyped<TabProps> {}
