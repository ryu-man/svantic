import { default as Header } from './header.svelte'
import { default as H1 } from './h1.svelte'
import { default as H2 } from './h2.svelte'
import { default as H3 } from './h3.svelte'
import { default as H4 } from './h4.svelte'
import { default as H5 } from './h5.svelte'

Header.h1 = H1
Header.h2 = H2
Header.h3 = H3
Header.h4 = H4
Header.h5 = H5

export { Header, H1, H2, H3, H4, H5 }
export default Header
