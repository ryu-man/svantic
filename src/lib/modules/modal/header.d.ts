import type { SvelteComponentTyped } from "svelte";
import type { MountEvent } from '../../common'

interface HeaderProps{
    image?: boolean
    icon?: boolean
}

/**
 * @description Svantic ModalHeader
 */
export default class Header extends SvelteComponentTyped<HeaderProps>{
}
