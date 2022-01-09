import { default as Modal } from './modal.svelte'
import { default as Header } from './header.svelte'
import { default as Content } from './content.svelte'
import { default as Actions } from './actions.svelte'
import { default as Description } from './description.svelte'

export function init() {
    Modal.Header = Header
    Modal.Content = Content
    Modal.Actions = Actions
    Modal.Description = Description
}

export { Header, Content, Actions, Description }
export default Modal
