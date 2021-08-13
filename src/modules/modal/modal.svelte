<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/dimmer.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/modal.min.css'

  import { classNames, css } from '../../utils'
  import { JQueryLazyLoader, ModalLoader } from '../../loaders'

  let _class = ''
  export { _class as class }
  export let size = ''
  export let basic = false
  export let active = false
  export let overlay = false
  export let inverted = false
  export let fullscreen = false
  export let style = {}
  export let settings

  /**
   * @type {SemanticUI.Modal}
   */
  let exec
  let onMount

  function module(node, settings) {
    css(node, style)

    exec = (args) => jQuery(node).modal(args)
    exec(settings)
    onMount?.()
  }

  /**********************************************************************************/

  export function mounted(callback) {
    onMount = callback
  }

  export function setSettings(settings) {
    exec(settings)
    return exec
  }

  export function show() {
    exec('show')
  }

  export function hide() {
    exec('hide')
  }

  export function toggle() {
    exec('toggle')
  }

  export function refresh() {
    exec('refresh')
  }

  export function showDimmer() {
    exec('show dimmer')
  }

  export function hideDimmer() {
    exec('hide dimmer')
  }

  export function hideOthers() {
    exec('hide others')
  }

  export function hideAll() {
    exec('hide all')
  }

  export function cacheSizes() {
    exec('cache sizes')
  }

  export function canFit() {
    return exec('can fit')
  }

  export function isActive() {
    return exec('is active')
  }

  export function setActive() {
    exec('set active')
  }
</script>

<JQueryLazyLoader>
  <ModalLoader>
    <div
      use:module="{settings}"
      class="{classNames(
        _class,
        'ui',
        { basic, active, overlay, fullscreen, inverted },
        size,
        'modal'
      )}"
    >
      <slot />
    </div>
  </ModalLoader>
</JQueryLazyLoader>
