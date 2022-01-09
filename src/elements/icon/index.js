import { default as Icon } from './icon.svelte'
import { default as Group } from './icons.svelte'

export function init() {
    // @ts-ignore
    Icon.Group = Group
}

export { Group }
export default Icon
