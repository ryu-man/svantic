export default interface StickySettings {
  // Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up
  pushing: boolean
  // Sets size of fixed content to match its width before fixing to screen dynamically. This is used because fixed may display block or 100% width content differently than it appears before sticking.
  setSize: boolean
  // Sticky container height will only be set if the difference between heights of container and context is larger than this jitter value.
  jitter: number
  // Whether any change in context DOM should automatically refresh cached sticky positions
  observeChanges: boolean
  // Context which sticky element should stick to
  context: boolean
  // Context which sticky should attach onscroll events.
  scrollContext: window
  // Offset in pixels from the top of the screen when fixing element to viewport
  offset: number
  // Offset in pixels from the bottom of the screen when fixing element to viewport
  bottomOffset: number

  /******************* Callbacks ******************/

  // Callback when element is repositioned from layout change
  onReposition: () => {}
  // Callback when requestAnimationFrame fires from scroll handler.
  onScroll: () => {}
  // Callback when element is fixed to page
  onStick: () => {}
  // Callback when element is unfixed from page
  onUnstick: () => {}
  // Callback when element is bound to top of parent container
  onTop: () => {}
  // Callback when element is bound to bottom of parent container
  onBottom: () => {}
}
