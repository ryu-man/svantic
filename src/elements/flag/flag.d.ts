import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Component } from '../../component'

type ISOCODE = string
interface FlagProps extends Component {
  isoCode?: ISOCODE
}
/**
 * Svantic Flag
 */
export default class Flag extends SvelteComponentTyped<FlagProps> {}
