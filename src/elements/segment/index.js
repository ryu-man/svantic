import { default as Segment} from './segment.svelte'
export { default as Group } from './segments.svelte'

export function init(){
    segment.Group = Group
}

export default Segment