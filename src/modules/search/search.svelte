<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/search.min.css'

  import { css, register, classNames } from '../../utils'
  import Controller from './controller'
  import JQueryLazyLoader from '../loaders/JQueryLazyLoader.svelte'
  import SearchLoader from '../loaders/SearchLoader.svelte'

  let _class
  export let disabled = false
  export let speed = ''
  export let aligned
  export let animation = ''
  export let long = false
  export let fluid = false
  export let local = false
  export let short = false
  export let loading = false
  export let category = false
  export let scrolling = false
  export let style
  export { _class as class }

  /**
   * @type {SemanticUI.DropdownSettings.Param}
   */
  export let settings = {}

  /**
   * @type {SemanticUI.Dropdown}
   */
  let exec
  function module(node, settings) {
    css(node, style)

    /**
     * @type {JQueryStatic}
     */
    const jQuery = window['JQuery']

    exec = (args) => jQuery(node).search(args)
    exec(settings)
  }

  export function query(callback) {
    exec('query ', callback)
    return this
  }

  export function displayMessage(text, type) {
    exec('display message', text, type)
    return this
  }

  export function searchLocal(query) {
    return exec('search local', query)
  }

  export async function hasMinimumCharacters() {
    return await exec('has minimum')
  }

  export function searchRemote(query, callback) {
    return exec('search remote', query, callback)
  }

  export function searchObject(query, object, searchFields) {
    return exec('search object', query, object, searchFields)
  }

  export function cancelQuery() {
    exec('cancel query')
    return this
  }

  export function isFocused() {
    return exec('is focused')
  }

  export function isVisible() {
    return exec('is visible')
  }

  export function isEmpty() {
    return exec('is empty')
  }

  export function getValue() {
    return exec('get value')
  }

  export function getResult(value) {
    return exec('get result', value)
  }

  export function setValue(value) {
    exec('set value', value)
    return this
  }

  export function readCache(query) {
    return exec('read cache', query)
  }

  export function clearCache(query) {
    exec('clear cache', query)
    return this
  }

  export function writeCache(query) {
    exec('write cache', query)
    return this
  }

  export function addResults(html) {
    exec('add results', html)
    return this
  }

  export function showResults(callback) {
    exec('show results', callback)
    return this
  }

  export function hideResults(callback) {
    exec('hide results', callback)
    return this
  }

  export function generateResults(response) {
    exec('generate results', response)
    return this
  }
</script>

<JQueryLazyLoader>
  <SearchLoader>
    <div
      use:module="{settings}"
      class="{classNames(
        _class,
        'ui',
        animation,
        speed,
        { disabled, category, fluid, local, long, scrolling, loading, aligned },
        'search'
      )}"
    >
      <slot>
        <!-- optional fallback -->
      </slot>
      <div class="results"></div>
    </div>
  </SearchLoader>
</JQueryLazyLoader>
