import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Component } from '../../component'

interface ProgressProps extends Component,Module<ToastSettings, Controller> {
  class?: string
  style?: Style
  color?: string
  inverted?: boolean
  progress?: boolean
  on?: {}
}

/**
 * Vomantic Bar
 */
export default class Bar extends SvelteComponentTyped<ProgressProps> {}
