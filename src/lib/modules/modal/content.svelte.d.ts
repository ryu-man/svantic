import type { SvelteComponentTyped } from "svelte";
import type { MountEvent } from '../../common'

interface ContentProps{
    image?: boolean
    scrolling?: boolean
}

/**
 * @description ModalContent
 */
export default class Content extends SvelteComponentTyped<ContentProps>{
}
