import { default as Step } from './step'
export { default as Group } from './steps'

export function init(){
    Step.Group = Group
}

export default Step