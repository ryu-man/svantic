<script context="module">
</script>

<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/transition.min.css'
  import '../../../../semantic/dist/components/search.min.css'
  
  import { createEventDispatcher, onMount as onMounted } from 'svelte'
  import { css, classNames } from '../../utils'
  import { search } from '../utils'

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
  export let placeholder = ''
  export let settings = {}
  export let onMount

  const executer = search(settings)
  const dispatch = createEventDispatcher();

  onMounted(() => {
    onMount?.($executer)
    dispatch('mount', $executer)
  })

  export function query(callback) {
    executer.module('query', callback)
    return this
  }

  export function displayMessage(text, type) {
    executer.module('display message', text, type)
    return this
  }

  export function searchLocal(query) {
    return executer.module('search local', query)
  }

  export async function hasMinimumCharacters() {
    return await executer.module('has minimum')
  }

  export function searchRemote(query, callback) {
    return executer.module('search remote', query, callback)
  }

  export function searchObject(query, object, searchFields) {
    return executer.module('search object', query, object, searchFields)
  }

  export function cancelQuery() {
    executer.module('cancel query')
    return this
  }

  export function isFocused() {
    return executer.module('is focused')
  }

  export function isVisible() {
    return executer.module('is visible')
  }

  export function isEmpty() {
    return executer.module('is empty')
  }

  export function getValue() {
    return executer.module('get value')
  }

  export function getResult(value) {
    return executer.module('get result', value)
  }

  export function setValue(value) {
    executer.module('set value', value)
    return this
  }

  export function readCache(query) {
    return executer.module('read cache', query)
  }

  export function clearCache(query) {
    executer.module('clear cache', query)
    return this
  }

  export function writeCache(query) {
    executer.module('write cache', query)
    return this
  }

  export function addResults(html) {
    executer.module('add results', html)
    return this
  }

  export function showResults(callback) {
    executer.module('show results', callback)
    return this
  }

  export function hideResults(callback) {
    executer.module('hide results', callback)
    return this
  }

  export function generateResults(response) {
    executer.module('generate results', response)
    return this
  }

</script>

  <div
    bind:this="{$executer}"
    use:css="{style}"
    class="{classNames(
      _class,
      'ui',
      animation,
      speed,
      { disabled, category, fluid, local, long, scrolling, loading, aligned },
      'search'
    )}"
  >
    <input
      class="prompt"
      type="text"
      placeholder="{placeholder}"
      on:change
      on:input
      on:keyup
      on:keydown
      on:keypress
      on:focus
      on:blur
    />
    <div class="results"></div>
  </div>
