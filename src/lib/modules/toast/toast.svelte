<script context="module">
</script>

<script>
  import '../../semantic/dist/components/transition.min.css'
  import '../../semantic/dist/components/toast.min.css'
  
  import { createEventDispatcher, onMount as onMounted } from 'svelte'
  import { classNames, css } from '../../utils'
  import { toast } from '../utils'

  let _class
  export { _class as class }
  export let type = 'toast'
  export let color = ''
  export let icon = false
  export let style
  export let settings = {}
  export let onMount = (_) => {}

  const executer = toast(settings)
  const dispatch = createEventDispatcher();

  onMounted(() => {
    onMount($executer)
    dispatch('mount', $executer)
  })

  /*********************************************************************************************/

  export function setSettings(settings) {
    executer.module(settings)
    return this
  }

  export function animatePause() {
    executer.module('animate pause')
    return this
  }

  export function animateContinue() {
    executer.module('animate continue')
    return this
  }

  export function close() {
    executer.module('close')
    return this
  }

  export function getToasts() {
    return executer.module('get toasts')
  }

  export function getRemainingTime() {
    return executer.module('get remainingTime')
  }

  export function ready() {
    return executer.ready
  }
</script>

  <div
    bind:this="{$executer}"
    use:css="{style}"
    class="{classNames(_class, 'ui', { icon }, color, type)}"
  >
    <slot />
  </div>
