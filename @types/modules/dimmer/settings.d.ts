import { TransitionType } from '../../transition'

interface Duration {
  show?: number
  hide?: number
}
export interface DimmerSettings {
  // Whether dimmers should use flex or legacy positioning
  useFlex: boolean
  // Specify a variation to add when generating dimmer, like inverted
  variation: boolean
  // If initializing a dimmer on a dimmable context, you can use dimmerName to distinguish between multiple dimmers in that context.
  dimmerName: boolean
  // Whether clicking on the dimmer should hide the dimmer (Defaults to auto, closable only when settings.on is not hover
  closable: string
  // Can be set to hover or click to show/hide dimmer on dimmable event
  on: boolean
  // Whether to dim dimmers using CSS transitions.
  useCSS: boolean
  // Animation duration dimming. If an integer is used, that value will apply to both show and hide animations.
  duration: Duration
  // Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
  transition: TransitionType
  // Whether a custom loader should be generated inside the dimmer
  displayLoader: boolean
  // Additional css classes to style the loader. See Loader
  loaderVariation: string
  // If a string is given, it will be shown underneath the loader animation icon
  loaderText: boolean
  /***************** Callbacks ********************/
  //Callback on element show
  onShow: () => void
  //Callback on element hide
  onHide: () => void
  //Callback on element show or hide
  onChange: () => void
}
