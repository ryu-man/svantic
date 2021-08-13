import { SvelteComponentTyped} from 'svelte/internal';
import { Module } from '../module';
import Controller from './controller'
import {EmbedSettings} from './settings'

interface EmbedProps extends Module<Controller, EmbedSettings> {
    active?: boolean;
    disabled?: boolean;
    fluid?: boolean;
    circular?: boolean;
    loading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    compact?: boolean;
    basic?: boolean;
    toggle?: boolean;
    positive?: boolean;
    negative?: boolean;
    tertiary?: boolean;
    inverted?: boolean;
    icon?: boolean;
}
/**
 * Vomantic Embed
 */
declare class Embed extends SvelteComponentTyped<EmbedProps> {
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
  getId(): Promise<any>

  /**
   *@description 	Returns placeholder image url
   */
  getPlaceholder(): Promise<string>

  /**
   *@description 	Returns source name
   */
  getSources(): Promise<string>

  /**
   *@description 	Returns source type
   */
  getType(): Promise<any>

  /**
   *@description 	Returns URL with all parameters added
   */
  getUrl(): Promise<string>

  /**
   *@description 	Returns whether embed content has placeholder
   */
  hasPlaceholder(): Promise<boolean>

  /**
   *@description 	Destroys instance and removes all events
   */
  destroy(): void
}
export default Embed;
