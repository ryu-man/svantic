import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { SharedProps } from '../../shared_props'

type ISOCODE = string
interface FlagProps extends SharedProps {
  isoCode?: ISOCODE
}
/**
 * Vomantic Flag
 */
export default class Flag extends SvelteComponentTyped<FlagProps> {}
