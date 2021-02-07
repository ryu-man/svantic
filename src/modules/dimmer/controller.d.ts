import { DimmerSettings } from './settings'
import Controller from '../controller'

type DimmerBehavior =
  | 'add content '
  | 'show'
  | 'hide'
  | 'toggle'
  | 'set opacity'
  | 'create'
  | 'get duration'
  | 'get dimmer'
  | 'has dimmer'
  | 'is active'
  | 'is animating'
  | 'is dimmer'
  | 'is dimmable'
  | 'is disabled'
  | 'is enabled'
  | 'is page'
  | 'is page dimmer'
  | 'set active'
  | 'set dimmable'
  | 'set dimmed'
  | 'set page dimmer'
  | 'set disabled'
export default class EmbedController extends Controller<
  DimmerBehavior,
  DimmerSettings
> {
  /**
   *@description 	Detaches a given element from DOM and reattaches element inside dimmer
   */
  addContent(element: HTMLElement): void

  /**
   *@description 	Shows dimmer
   */
  show(): void

  /**
   *@description 	Hides dimmer
   */
  hide(): void

  /**
   *@description 	Toggles current dimmer visibility
   */
  toggle(): void

  /**
   *@description 	Changes dimmer opacity
   */
  setOpacity(opacity: number): void

  /**
   *@description 	Creates a new dimmer in dimmable context
   */
  create(): void

  /**
   *@description 	Returns current duration for show or hide event depending on current visibility
   */
  getDuration(): Promise<number>

  /**
   *@description 	Returns DOM element for dimmer
   */
  getDimmer(): Promise<HTMLElement>

  /**
   *@description 	Returns whether current dimmable has a dimmer
   */
  hasDimmer(): Promise<boolean>
  /**
   *@description 	Whether section's dimmer is active
   */
  isActive(): Promise<boolean>
  /**
   *@description 	Whether dimmer is animating
   */
  isAnimating(): Promise<boolean>

  /**
   *@description 	Whether current element is a dimmer
   */
  isDimmer(): Promise<boolean>

  /**
   *@description 	Whether current element is a dimmable section
   */
  isDimmable(): Promise<boolean>

  /**
   *@description 	Whether dimmer is disabled
   */
  isDisabled(): Promise<boolean>

  /**
   *@description 	Whether dimmer is not disabled
   */
  isEnabled(): Promise<boolean>

  /**
   *@description 	Whether dimmable section is body
   */
  isPage(): Promise<boolean>

  /**
   *@description 	Whether dimmer is a page dimmer
   */
  isPageDimmer(): Promise<boolean>

  /**
   *@description 	Sets page dimmer to active
   */
  setActive(): void

  /**
   *@description 	Sets an element as a dimmable section
   */
  setDimmable(): void

  /**
   *@description 	Sets a dimmable section as dimmed
   */
  setDimmed(): void

  /**
   *@description 	Sets current dimmer as a page dimmer
   */
  setPageDimmer(): void

  /**
   *@description 	Sets a dimmer as disabled
   */
  setDisabled(): void
}
