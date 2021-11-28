import { default as Shape } from './shape.svelte'
import { default as Side } from './side.svelte'

export function init(){
    // @ts-ignore
    Shape.Side = Side
}

export { Side }
export default Shape
