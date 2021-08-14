import { SvelteComponentTyped } from 'svelte'
import Module from '../module'
import Settings from './settings'

interface StickyProps extends Module<Settings> {}

export default class Sticky extends SvelteComponentTyped<StickyProps> {}
