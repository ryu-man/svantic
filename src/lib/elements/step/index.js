import { default as Step } from './step.svelte'
export { default as Group } from './steps.svelte'

export function init(){
    // @ts-ignore
    Step.Group = Group
}

export default Step
