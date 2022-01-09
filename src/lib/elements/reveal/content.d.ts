import { Component } from '../../component'
import { SvelteComponentTyped } from 'svelte'

type State = 'visible' | 'hidden'
interface ContentProps extends Component {
  state?: State
}
/**
 * Vomantic Reveal Content
 */
export default class Content extends SvelteComponentTyped<ContentProps> {}
