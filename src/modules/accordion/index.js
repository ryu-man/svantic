import { default as Accordion } from './accordion.svelte'
import { default as Title } from './title.svelte'
import { default as Content } from './content.svelte'

export function init() {
    Accordion.title = Title
    Accordion.content = Content
}

export { Title, Content }
export default Accordion