import { default as Progress } from './progress.svelte'
import { default as Bar } from './bar.svelte'
import { default as Multiple } from './multiple.svelte'
import { default as Label } from './Label.svelte'

export function init() {
    Progress.Bar = Bar
    Progress.Multiple = Multiple
    Progress.Label = Label
}

export { Bar, Multiple, Label }
export default Progress
