import type { SvelteComponentTyped } from "svelte";
import type { Module } from "../module";
import Controller from './controller'
import Settings from './settings'

interface StickyProps extends Module<Controller, Settings>{
/**
* @description Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up
* @default false
*/
pushing:boolean

/**
* @description Sets size of fixed content to match its width before fixing to screen dynamically. This is used because fixed may display block or 100% width content differently than it appears before sticking.
* @default true
*/
setSize:boolean

/**
* @description Sticky container height will only be set if the difference between heights of container and context is larger than this jitter value.
* @default 5
*/
jitter:number

/**
* @description Whether any change in context DOM should automatically refresh cached sticky positions
* @default false
*/
observeChanges:boolean

/**
* @description Context which sticky element should stick to
* @default false
*/
context:boolean

/**
* @description Context which sticky should attach onscroll events.
* @default window
*/
scrollContext:typeof window

/**
* @description Offset in pixels from the top of the screen when fixing element to viewport
* @default 0
*/
offset:number

/**
* @description Offset in pixels from the bottom of the screen when fixing element to viewport
* @default 0
*/
bottomOffset:number

/**
* @description Callback when requestAnimationFrame fires from scroll handler
*/
onScroll:()=> void

/**
* @description Callback when element is fixed to page
*/
onStick:()=> void

/**
* @description Callback when element is unfixed from page
*/
onUnstick:()=> void

/**
* @description Callback when element is bound to top of parent container
*/
onTop:()=> void

/**
* @description Callback when element is bound to bottom of parent container
*/
onBottom:()=> void


}


export default class Sticky extends SvelteComponentTyped<StickyProps>{

}