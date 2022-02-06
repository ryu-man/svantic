import { default as Placeholder } from './placeholder.svelte'
import { default as Header } from './header.svelte'
import { default as Image } from './image.svelte'
import { default as Paragraph } from './paragragh.svelte'
import { default as Line } from './line.svelte'

export function init(){
    // @ts-ignore
    Placeholder.Header = Header
    // @ts-ignore
    Placeholder.Image = Image
    // @ts-ignore
    Placeholder.Paragraph = Paragraph
    // @ts-ignore
    Placeholder.Line = Line
}

export { Header, Image, Paragraph, Line }

export default Placeholder
