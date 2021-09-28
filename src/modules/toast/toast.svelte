<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/toast.min.css'

  import { onMount as onMounted } from 'svelte'
  import { classNames, css } from '../../utils'
  import { JQueryLazyLoader, ToastLoader } from '../loaders'
  import { toast } from '../module'
  
  let _class
  export { _class as class }
  export let type = 'toast'
  export let color = ''
  export let icon = false
  export let style
  export let settings = {}

  const executer = toast(settings)

  onMounted(() => {})

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
</script>

<JQueryLazyLoader>
  <ToastLoader>
    <div
      bind:this="{$executer}"
      use:css="{style}"
      class="{classNames(_class, 'ui', { icon }, color, type)}"
    >
      <slot />
    </div>
  </ToastLoader>
</JQueryLazyLoader>
