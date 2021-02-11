import { default as Modal } from './modal.svelte'
import { default as Header } from './header.svelte'
import { default as Content } from './content.svelte'
import { default as Actions } from './actions.svelte'
import { default as ModalController } from './controller'

Modal.header = Header
Modal.content = Content
Modal.actions = Actions

export {Modal, Header, Content, Actions, ModalController}
export default Modal
