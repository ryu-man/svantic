import { default as Placeholder } from './placeholder.svelte'
import { default as Header } from './header.svelte'
import { default as Image } from './image.svelte'
import { default as Paragraph } from './paragragh.svelte'
import { default as Line } from './line.svelte'

export function init(){
    Placeholder.Header = Header
    Placeholder.Image = Image
    Placeholder.Paragraph = Paragraph
    Placeholder.Line = Line
}

export { Header, Image, Paragraph, Line }
export default Placeholder
