import type { SvelteComponentTyped } from "svelte";

interface ContentProps{
    image?: boolean
    scrolling?: boolean
}

/**
 * @description ModalContent
 */
export default class Content extends SvelteComponentTyped<ContentProps>{
}