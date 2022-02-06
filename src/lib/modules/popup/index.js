import { default as Popup } from './popup.svelte'
import { default as Header } from './header.svelte'
import { default as Body } from './Body.svelte'

export function init() {
    Popup.Header = Header
    Popup.Body = Body
}

export { Header, Body }
export default Popup