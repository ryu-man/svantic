export default interface PopupSettings {
  // Can specify a DOM element that should be used as the popup. This is useful for including a pre-formatted popup.
  popup: boolean
  // Whether all other popups should be hidden when this popup is opened
  exclusive: boolean
  // Whether to move popup to same offset container as target element when popup already exists on the page. Using a popup inside of an element without overflow:visible, like a sidebar, may require you to set this to boolean
  movePopup: boolean
  // Whether popup should attach mutationObservers to automatically run destroy when the element is removed from the page's DOM.
  observeChanges: boolean
  // When the popup surpasses the boundary of this element, it will attempt to find another display position.
  boundary: Window | Element
  // Selector or jquery object specifying where the popup should be created.
  context: string | Element | JQuery.Selector
  // Will automatically hide a popup on scroll event in this context
  scrollContext: Window | Element
  // Number of pixels that a popup is allowed to appear outside the boundaries of its context. This allows for permissible rounding errors when an element is against the edge of its context.
  jitter: number
  // left	Position that the popup should appear
  position: 'top' | 'right' | 'bottom' | 'left'
  // If given position should be used, regardless if popup fits
  forcePosition: boolean
  // If a popup is inline it will be created next to current element, allowing for local css rules to apply. It will not be removed from the DOM after being hidden. Otherwise popups will appended to body and removed after being hidden.
  inline: boolean
  // Whether popup contents should be preserved in the page after being hidden, allowing it to re-appear slightly faster on subsequent loads.
  preserve: boolean
  // Can be set to adjacent or opposite to prefer adjacent or opposite position if popup cannot fit on screen
  prefer: 'opposite' | 'adjacent'
  // When set to boolean, a popup will not appear and produce an error message if it cannot entirely fit on page. Setting this to a position like, right center forces the popup to use this position as a last resort even if it is partially offstage. Setting this to true will use the last attempted position.
  lastResort: boolean
  // Event used to trigger popup. Can be either focus, click, hover, or manual. Manual popups must be triggered with $('.element').popup('show');
  on: 'hover' | 'focus' | 'click' | 'manual'
}
