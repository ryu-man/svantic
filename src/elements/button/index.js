import { default as Buttons } from "./buttons.svelte";
import { default as Button } from "./button.svelte";
import { default as Content } from "./content.svelte"
import { default as Or} from './or.svelte'

Button.Content = Content
Button.Or = Or

export { Button, Buttons , Content}
export default Button