<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/toast.min.css'

  import { classNames, css } from '../../utils'
  import { JQueryLazyLoader, ToastLoader } from '../../loaders'

  let _class
  export { _class as class }
  export let type = 'toast'
  export let color = ''
  export let icon = false
  export let style
  export let settings = {}

  /**
   * @type {SemanticUI.Toast}
   */
  let exec
  function module(node, settings) {
    css(node, style)

    /**
     * @type {JQueryStatic}
     */
    const jQuery = window['JQuery']

    exec = (args) => jQuery(node).toast(args)
    exec(settings)
  }

  /*********************************************************************************************/

  export function setSettings(settings) {
    exec(settings)
    return exec
  }

  export function animatePause() {
    exec('animate pause')
    return exec
  }

  export function animateContinue() {
    exec('animate continue')
    return exec
  }

  export function close() {
    exec('close')
    return exec
  }

  export function getToasts() {
    return exec('get toasts')
  }

  export function getRemainingTime() {
    return exec('get remainingTime')
  }
</script>

<JQueryLazyLoader>
  <ToastLoader>
    <div
      use:module="{settings}"
      class="{classNames(_class, 'ui', { icon }, color, type)}"
    >
      <slot />
    </div>
  </ToastLoader>
</JQueryLazyLoader>
