import type { SearchSettings } from './settings'
import Controller from '../controller'

type SearchBehavior =
  | 'query '
  | 'display message'
  | 'cancel query'
  | 'search local'
  | 'has minimum characters'
  | 'search remote'
  | 'search object'
  | 'cancel query'
  | 'is focused'
  | 'is visible'
  | 'is empty'
  | 'get value'
  | 'get result'
  | 'set value'
  | 'read cache'
  | 'clear cache'
  | 'write cache'
  | 'add results'
  | 'show results'
  | 'hide results'
  | 'generate results'
  | 'destroy'
export default class SearchController extends Controller<
  SearchBehavior,
  SearchSettings
> {
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
  searchLocal(query: string): Promise

  /**
   *@description 	Whether has minimum characters
   */
  hasMinimumCharacters(): Promise<boolean>

  /**
   *@description 	Search remote endpoint for specified query and display results
   */
  searchRemote(query: string, callback: () => void): Promise

  /**
   *@description 	Search object for specified query and return results
   */
  searchObject(query: string, object: any, searchFields: any): Promise

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
  getValue(): Promise

  /**
   *@description 	Returns JSON object matching searched title or id (see above)
   */
  getResult(value: string): Promise

  /**
   *@description 	Sets search input to value
   */
  setValue(value: string): void

  /**
   *@description 	Reads cached results for query
   */
  readCache(query: string): Promise

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
}
