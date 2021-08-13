import { default as Modal } from './modal.svelte'
import { default as Header } from './header.svelte'
import { default as Content } from './content.svelte'
import { default as Actions } from './actions.svelte'
import {default as Description } from './description.svelte'

Modal.header = Header
Modal.content = Content
Modal.actions = Actions
Modal.description = Description

export {Modal, Header, Content, Actions,Description}
export default Modal
