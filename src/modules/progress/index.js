import { default as Progress } from './progress.svelte'
import { default as Bar } from './bar.svelte'
import { default as Multiple } from './multiple.svelte'

export function init() {
    Progress.Bar = Bar
    Progress.Multiple = Multiple
}

export { Bar, Multiple }
export default Progress
