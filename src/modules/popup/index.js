export { default as PopupController } from './controller'
import { default as Popup } from './popup.svelte'
import { default as Header } from './header.svelte'

Popup.Header = Header

export { Popup }