import type { SvelteComponentTyped } from 'svelte/internal'
import type { SvanticProps } from '../../common'

type DividerProps = SvanticProps & {
    active?: boolean
}

/**
 * @description Breadcrumb divider
 */
export default class Divider extends SvelteComponentTyped<DividerProps> {}
