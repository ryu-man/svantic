import { SvelteComponentTyped } from 'svelte'
import {Module} from '../utils'
import Settings from './settings'
import type { MountEvent } from '../../common'

interface StickyProps extends Module<Settings> {}

export default class Sticky extends SvelteComponentTyped<StickyProps> {}
