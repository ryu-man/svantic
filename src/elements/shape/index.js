import { default as Shape } from './shape.svelte'
import { default as Side } from './side.svelte'

export function init(){
    Shape.Side = Side
}

export { Side }
export default Shape
