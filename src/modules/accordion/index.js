import { default as AccordionController } from './controller'
import { default as Accordion } from './accordion.svelte'
import { default as Title } from './title.svelte'
import { default as Content } from './content.svelte'

Accordion.title = Title
Accordion.content = Content

export { Accordion, AccordionController, Title, Content }
export default Accordion


