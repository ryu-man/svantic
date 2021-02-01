import '../../../semantic/dist/components/step.css'

import { default as Step } from './step.svelte'
import { default as Link } from './link.svelte'
import { default as Steps } from './steps.svelte'

Step.Link = Link

export {Step, Link, Steps}
export default Step