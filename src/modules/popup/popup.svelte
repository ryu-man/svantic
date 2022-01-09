<script context="module">
  import { transitionLoader, popupLoader } from '../utils'
  const isReady = Promise.all([popupLoader(), transitionLoader()])
</script>

<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/popup.min.css'

  import { popup } from '../utils/module'
import { createEventDispatcher, onMount } from 'svelte';

  export let settings = {}

  let exec

  const executer = popup(settings)
  const dispatch = createEventDispatcher();

  onMount(()=>{
    dispatch('mount')
  })

  export function show() {
    exec('show')
    return this
  }

  export function hide() {
    exec('hide')
    return this
  }

  export function hideAll() {
    exec('hide all')
    return this
  }

  export function getPopup() {
    exec('get popup')
    return this
  }

  export function changeContent(html) {
    exec('change content', html)
    return this
  }

  export function toggle() {
    exec('toggle')
    return this
  }

  export function isVisible() {
    return exec('is visible')
  }

  export function isHidden() {
    return exec('is hidden')
  }

  export function exists() {
    exec('exists')
    return this
  }

  export function reposition() {
    exec('reposition')
    return this
  }

  export function setPosition(position) {
    exec('set position', position)
    return this
  }

  export function removePopup() {
    exec('remove popup')
    return this
  }

  export function ready(){
    return isReady
  }
</script>

{#await isReady then value}
  <slot
    popup="{(node) => {
      $executer = node
      return executer.module
    }}"
  />
{/await}
