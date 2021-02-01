import type { SvelteComponentTyped } from 'svelte'

interface ValueProps {}
/**
 * @description A statistic can contain a numeric, icon, image, or text value
 * @example
 * <Statistic>
 *    <Statistic.Value>value</Statistic.Value>
 * </Statistic>
 */
export default class Value extends SvelteComponentTyped<ValueProps> {}
