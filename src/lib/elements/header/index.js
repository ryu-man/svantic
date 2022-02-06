import { default as Header } from './header.svelte'
import { default as H1 } from './h1.svelte'
import { default as H2 } from './h2.svelte'
import { default as H3 } from './h3.svelte'
import { default as H4 } from './h4.svelte'
import { default as H5 } from './h5.svelte'
import { default as Sub } from './sub.svelte'

export function init() {
    // @ts-ignore
    Header.H1 = H1
    // @ts-ignore
    Header.H2 = H2
    // @ts-ignore
    Header.H3 = H3
    // @ts-ignore
    Header.H4 = H4
    // @ts-ignore
    Header.H5 = H5
    // @ts-ignore
    Header.Sub = Sub
}

export { H1, H2, H3, H4, H5, Sub }
export default Header
