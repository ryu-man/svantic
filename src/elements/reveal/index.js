import { default as Reveal } from './reveal.svelte'
import { default as Content } from './content.svelte'

export function init() {
    // @ts-ignore
    Reveal.Content = Content
}

export { Content }

export default Reveal
