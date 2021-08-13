import { default as Buttons } from './buttons.svelte'
import { default as Button } from './button.svelte'
import { default as Content } from './content.svelte'
import { default as Or } from './or.svelte'

export function init() {
    Button.Content = Content
    Button.Or = Or
}

export { Buttons as Group, Content, Or }

export default Button