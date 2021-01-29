export interface TabularMenuSettings {
  /**
   * @description Whether tab should load remote content as same url as history
   */
  auto?: boolean

  /**
   * @description Whether to record history events for tab changes
   */
  history?: boolean

  /**
   * @description Do not load content remotely on first tab load. Useful when open tab is rendered on server.
   */
  ignoreFirstLoad?: boolean

  /**
   * @description Whether inline scripts in tab HTML should be parsed on tab load. Defaults to once, parsing only on first load. Can also be set to true or false to always parse or never parse inline scripts.
   */
  evaluateScripts?: 'once' | boolean

  /**
  * @description 	When true and no active tab exists, the first available tab will be activated.
    When a string is given and no active tab exists, the tab those named path matches the string will be activated
    When false no active tab detection will happen
  */
  autoTabActivation?: boolean

  /**
   * @description Tab should reload content every time it is opened
   */
  alwaysRefresh?: boolean

  /**
   * @description Can be set to either siblings or all. Siblings will only de-activate tab activators that are siblings of the clicked element when a tab is selected. All will deactivate all other tab activators initialized at the same time.
   */
  deactivate?: 'siblings' | 'all'
  /**
   * @description Can be set to either response, DOM or html. Using DOM will cache the a clone of the DOM tree, preserving all events as they existed on render. response will cache the original response on load, this way callbacks always receive the same content. Using html will cache the resulting html after all callbacks, making sure any changes to content are preserved.
   */
  cacheType?: 'response' | 'html' | 'DOM'

  /**
   * @description Tab should cache content after loading locally to avoid server trip on second load
   */
  cache?: boolean

  /**
   * @description Settings object for $.api call
   */
  apiSettings?: boolean

  /**
   * @description Can be set to hash or state. Hash will use an in-page link to create history events. State will use DOM History and load pages from server on refresh.
   */
  historyType?: 'hash'

  /**
   * @description When using historyType state you must specify the base URL for all internal links.
   */
  path?: boolean

  /**
   * @description Tabs are limited to those found inside this context
   */
  context?: boolean

  /**
   * @description If enabled limits tabs to children of passed context
   */
  childrenOnly?: boolean

  /**
   * @description Maximum amount of nested tabs allowed (avoids recursion)
   */
  maxDepth?: number

  /**************** Callbacks ******************/

  /**
   * @description Callback only the first time a tab is loaded
   */
  onFirstLoad?: (tabPath: any, parameterArray: any, historyEvent: any) => void

  /**
   * @description Callback every time a tab is loaded
   */
  onLoad?: (tabPath: any, parameterArray: any, historyEvent: any) => void

  /**
   * @description Called when a tab begins loading remote content
   */
  onRequest?: (tabPath: any) => void

  /**
   * @description Called after a tab becomes visible
   */
  onVisible?: (tabPath: any) => void
}
