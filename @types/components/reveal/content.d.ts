import { SharedProps } from '../../shared_props'
import { SvelteComponentTyped } from 'svelte'

type State = 'visible' | 'hidden'
interface ContentProps extends SharedProps {
  state?: State
}
/**
 * Vomantic Reveal Content
 */
export default class Content extends SvelteComponentTyped<ContentProps> {}
