import { default as Placeholder } from './placeholder.svelte'
import { default as Header } from './header.svelte'
import { default as Image } from './image.svelte'
import { default as Paragraph } from './paragragh.svelte'
import { default as Line } from './line.svelte'

Placeholder.header = Header
Placeholder.image = Image
Placeholder.paragraph = Paragraph
Placeholder.line = Line

export { Placeholder, Header, Image, Paragraph, Line }
export default Placeholder
