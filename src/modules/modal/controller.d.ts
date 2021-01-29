import type { ModalSettings } from './settings'
import Controller from '../controller'

declare type ModalBehavior =
  | 'show'
  | 'hide'
  | 'toggle'
  | 'refresh'
  | 'show dimmer'
  | 'hide dimmer'
  | 'hide others'
  | 'hide all'
  | 'cache sizes'
  | 'can fit'
  | 'is active'
  | 'set active'
  | 'attach events'

export default class ModalController extends Controller<
  ModalBehavior,
  ModalSettings
> {
  show(): void
  hide(): void
  toggle(): void
  refresh(): void
  showDimmer(): void
  hideDimmer(): void
  hideOthers(): void
  hideAll(): void
  cacheSizes(): void
  canFit(): boolean
  isActive(): boolean
  setActive(): void
}
export {}
