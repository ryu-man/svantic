import type { SvelteComponentTyped } from "svelte";
import type { Module } from "../module";
import Controller from './controller'
import Settings from './settings'

interface StickyProps extends Module<Controller, Settings>{

}

export default class Sticky extends SvelteComponentTyped<StickyProps>{}