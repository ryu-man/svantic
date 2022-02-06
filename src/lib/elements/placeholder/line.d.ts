import { Component } from '../../component'
import { SvelteComponentTyped } from 'svelte'

interface LineProps extends Component {
  length?: 'full' | 'very long' | 'long' | 'medium' | 'short' | 'very short'
  fluid?: boolean
}
/**
 * Vomantic Placeholder Line
 */
export default class Line extends SvelteComponentTyped<LineProps> {}
