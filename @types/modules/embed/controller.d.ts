import type { EmbedSettings } from './settings'
import Controller from '../controller'

type EmbedBehavior =
  | 'change'
  | 'reset'
  | 'show'
  | 'hide'
  | 'get id'
  | 'get placeholder'
  | 'get sources'
  | 'get type'
  | 'get url'
  | 'has placeholder'
  | 'destroy'
export default class EmbedController extends Controller<
  EmbedBehavior,
  EmbedSettings
> {
  /**
   *@description 	Changes iframe to a new content source
   */
  change(source, id, url): void

  /**
   *@description 	Removes embed and shows placeholder content if available
   */
  reset(): void

  /**
   *@description 	Shows embed content
   */
  show(): void

  /**
   *@description 	Hides embed content and shows placeholder content
   */
  hide(): void

  /**
   *@description 	Returns current content id
   */
  getId(): any

  /**
   *@description 	Returns placeholder image url
   */
  getPlaceholder(): string

  /**
   *@description 	Returns source name
   */
  getSources(): string

  /**
   *@description 	Returns source type
   */
  getType(): any

  /**
   *@description 	Returns URL with all parameters added
   */
  getUrl(): string

  /**
   *@description 	Returns whether embed content has placeholder
   */
  hasPlaceholder(): boolean

  /**
   *@description 	Destroys instance and removes all events
   */
  destroy(): void
}
