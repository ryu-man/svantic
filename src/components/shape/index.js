import { default as Shape } from './shape.svelte'
import { default as Side } from './side.svelte'

Shape.side = Side
export { Shape, Side }
export default Shape
