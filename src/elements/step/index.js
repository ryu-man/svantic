import { default as Step } from './step.svelte'
export { default as Group } from './steps.svelte'

export function init(){
    Step.Group = Group
}

export default Step