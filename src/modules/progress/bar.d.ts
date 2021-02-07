import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Component } from '../../component'

interface ProgressProps extends Component{
  color?: string
  inverted?: boolean
  progress?: boolean
  on?: {}
}

/**
 * Vomantic Bar
 */
export default class Bar extends SvelteComponentTyped<ProgressProps> {}
