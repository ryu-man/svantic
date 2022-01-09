import { SvelteComponentTyped } from 'svelte/internal'
import type { Align, Speed, Loading } from '../../variations'
import {Module} from '../utils'
import SearchSettings from './settings'
import type { MountEvent } from '../../common'

declare type State = 'disabled'
interface SearchProps extends Module<SearchSettings> {
  fluid?: boolean
  local?: boolean
  category?: boolean
  loading?: boolean
  scrolling?: boolean
  disabled?: boolean
  aligned?: Align
  speed?: Speed
  animation?: Loading
}
/**
 * @description Svantic Search
 */
declare class Search extends SvelteComponentTyped<SearchProps> {
  /**
   *@description 	Search for value currently set in search input
   */
  query(callback: () => void): void

  /**
   *@description 	Displays message in search results with text, using template matching type
   */
  displayMessage(text: any, type: any): void

  /**
   *@description 	Search local object for specified query and display results
   */
  searchLocal(query: string): Promise<any>

  /**
   *@description 	Whether has minimum characters
   */
  hasMinimumCharacters(): Promise<boolean>

  /**
   *@description 	Search remote endpoint for specified query and display results
   */
  searchRemote(query: string, callback: () => void): Promise<any>

  /**
   *@description 	Search object for specified query and return results
   */
  searchObject(query: string, object: any, searchFields: any): Promise<any>

  /**
   *@description 	Cancels current remote search request
   */
  cancelQuery(): void

  /**
   *@description 	Whether search is currently focused
   */
  isFocused(): Promise<boolean>

  /**
   *@description 	Whether search results are visible
   */
  isVisible(): Promise<boolean>

  /**
   *@description 	Whether search results are empty
   */
  isEmpty(): Promise<boolean>

  /**
   *@description 	Returns current search value
   */
  getValue(): Promise<any>

  /**
   *@description 	Returns JSON object matching searched title or id (see above)
   */
  getResult(value: string): Promise<any>

  /**
   *@description 	Sets search input to value
   */
  setValue(value: string): void

  /**
   *@description 	Reads cached results for query
   */
  readCache(query: string): Promise<any>

  /**
   *@description 	Clears value from cache, if no parameter passed clears all cache
   */
  clearCache(query: string): void

  /**
   *@description 	Writes cached results for query
   */
  writeCache(query: string): void

  /**
   *@description 	Adds HTML to results and displays
   */
  addResults(html: HTMLElement): void

  /**
   *@description 	Shows results container
   */
  showResults(callback: () => void): void

  /**
   *@description 	Hides results container
   */
  hideResults(callback: () => void): void

  /**
   *@description 	Generates results using parser specified by settings.template
   */
  generateResults(response: any): void

  ready(): Promise<void>
}
export default Search
