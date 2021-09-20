import type { SvelteComponentTyped } from "svelte";

interface HeaderProps{
    image?: boolean
    icon?: boolean
}

/**
 * @description Svantic ModalHeader
 */
export default class Header extends SvelteComponentTyped<HeaderProps>{
}