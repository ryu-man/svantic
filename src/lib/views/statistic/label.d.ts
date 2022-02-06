import type { SvelteComponentTyped } from 'svelte'
interface LabelProps {}

/**
 * @description A statistic can contain a label to help provide context for the presented value
 * @example
 * <Statistic>
 *    <Statistic.Label>text</Statistic.Label>
 * </Statistic>
 */
export default class Label extends SvelteComponentTyped<LabelProps> {}
