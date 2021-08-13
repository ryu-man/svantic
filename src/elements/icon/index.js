import { default as Icon} from './icon.svelte'
export { default as Group } from './icons.svelte'

export function init(){
    Icon.Group = Group
}

export default Icon