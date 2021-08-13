import type { SvelteComponentTyped } from 'svelte'

interface ModalDimmerProps {
  /*A dimmer can be blurred*/
  blurring?: boolean

  /*A dimmer can center its contents in the viewport*/
  centered?: boolean

  /*A dimmer can be inverted*/
  inverted?: boolean

  /*The node where the modal should mount. Defaults to document.body*/
  mountNode?: any

  /*A dimmer can make body scrollable*/
  scrolling?: boolean
}

export default class ModalDimmer extends SvelteComponentTyped<ModalDimmerProps> {}
