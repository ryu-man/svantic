import { Component } from '../../component'
import { SvelteComponentTyped } from 'svelte'

type State = 'visible' | 'hidden'
interface ContentProps extends Component {
  state?: State
}
/**
 * Svantic Reveal Content
 */
export default class Content extends SvelteComponentTyped<ContentProps> {}
