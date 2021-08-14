import type { EasingType } from '../../transition'

export default interface AccordionSettings {
  /** Only allow one section open at a time */
  exclusive: boolean
  /** Event on title that will cause accordion to open */
  on: click
  /** Whether child content opacity should be animated (may cause performance issues with many child elements) */
  animateChildren: boolean
  /** Close open nested accordion content when an element closes */
  closeNested: boolean
  /** Allow active sections to collapse */
  collapsible: boolean
  /** Duration in ms of opening animation */
  duration: number
  /** Easing of opening animation. EaseInOutQuint is included with accordion, for additional options you must include easing equations. */
  easing: EasingType

  /**
   * @description Callback before element opens
   */
  onOpening?: () => void

  /**
   * @description Callback after element is open
   */
  onOpen?: () => void

  /**
   * @description Callback before element closes
   */
  onClosing?: () => void

  /**
   * @description Callback after element is closed
   */
  onClose?: () => void

  /**
   * @description Callback before element opens or closes
   */
  onChanging?: () => void

  /**
   * @description Callback on element open or close
   */
  onChange?: () => void
}
