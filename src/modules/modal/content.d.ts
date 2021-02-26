import type { SvelteComponentTyped } from "svelte";

interface ContentProps{
    image?: boolean
    scrolling?: boolean
}

export default class Content extends SvelteComponentTyped<ContentProps>{
}