import type { EasingType, TransitionType } from '../../transition'

export default interface SidebarSettings {
  /** Context which sidebar will appear inside */
  context?: HTMLElement
  /** Whether multiple sidebars can be open at once */
  exclusive?: boolean
  /** Whether sidebar can be closed by clicking on page */
  closableboolean?: boolean
  /** Whether to dim page contents when sidebar is visible */
  dimPageboolean?: boolean
  /** Whether to lock page scroll when sidebar is visible */
  scrollLock?: boolean
  /** Whether to return to original scroll position when sidebar is hidden, automatically occurs with transition: scale */
  returnScroll?: boolean
  /** When sidebar is initialized without the proper HTML, using this option will defer creation of DOM to use requestAnimationFrame. */
  delaySetup?: boolean
  /** Named transition to use when animating sidebar. Defaults to 'auto' which selects transition from defaultTransition based on direction. */
  transition?: 'auto' | TransitionType
  /** Named transition to use when animating when detecting mobile device. Defaults to 'auto' which selects transition from defaultTransition based on direction. */
  mobileTransition?: 'auto' | TransitionType
  /**  Default transitions for each direction and screen size, used with transition: auto */
  defaultTransition?: {
    computer?: {
      left?: TransitionType
      right?: TransitionType
      top?: TransitionType
      bottom?: TransitionType
    }
    mobile?: {
      left?: TransitionType
      right?: TransitionType
      top?: TransitionType
      bottom?: TransitionType
    }
  }
  /** Whether Javascript animations should be used. Defaults to false. Setting to auto will use legacy animations only for browsers that do not support CSS transforms */
  useLegacy?: boolean
  /** Duration of sidebar animation when using legacy Javascript animation */
  duration?: number
  /** Easing to use when using legacy Javascript animation */
  easing?: EasingType
  /** Is called when a sidebar begins animating in. */
  onVisible: () => void
  /** Is called when a sidebar has finished animating in. */
  onShow: () => void
  /** Is called when a sidebar begins to hide or show */
  onChange: () => void
  /** Is called before a sidebar begins to animate out. */
  onHide: () => void
  /** Is called after a sidebar has finished animating out. */
  onHidden: () => void
}
