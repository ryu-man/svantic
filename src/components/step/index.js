import { default as Step } from './step.svelte'
import { default as StepLink } from './link.svelte'
import { default as Steps } from './steps.svelte'

Step.link = StepLink

export {Step, StepLink, Steps}
export default Step