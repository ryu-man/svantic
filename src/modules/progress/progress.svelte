<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/progress.min.css'
  
  import { classNames, css } from '../../utils'
  import { JQueryLazyLoader, ProgressLoader } from '../../loaders'

  let _class
  export { _class as class }
  export let indicating
  export let attached
  export let speed
  export let size
  export let color
  export let value = 0
  export let total = 100
  export let inverted = false
  export let indeterminate = false
  export let disabled = false
  export let error = false
  export let warning = false
  export let success = false
  export let active = false
  export let style

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

    exec = (args) => jQuery(node).progress(args)
    exec(settings)
  }

  export function setPercent(percent) {
    exec('set percent', percent)
    return exec
  }

  export function setProgress(value) {
    exec('set progress', value)
    return exec
  }

  export function increment(incrementValue) {
    exec('increment', incrementValue)
    return exec
  }

  export function decrement(decrementValue) {
    exec('decrement', decrementValue)
    return exec
  }

  export function updateProgress(value) {
    exec('update progress', value)
    return exec
  }

  export function complete(keepState) {
    exec('complete', keepState)
    return exec
  }

  export function reset() {
    exec('reset')
    return exec
  }

  export function setTotal(total) {
    exec('set total', total)
    return exec
  }

  export async function getText(text) {
    return await exec('get text', text)
  }

  export function getNormalizedValue(value) {
    return exec('get normalized', value)
  }

  export function getPercent() {
    return exec('get percent')
  }

  export function getValue() {
    return exec('get value')
  }

  export function getTotal() {
    return exec('get total')
  }

  export function isComplete() {
    return exec('is complete')
  }

  export function isSuccess() {
    return exec('is success')
  }

  export function isWarning() {
    return exec('is warning')
  }

  export function isError() {
    return exec('is error')
  }

  export function isActive() {
    return exec('is active')
  }

  export function setActive() {
    exec('set active')
    return exec
  }

  export function setWarning(text, keepState) {
    exec('set warning', text, keepState)
    return exec
  }

  export function setSuccess(text, keepState) {
    exec('set success', text, keepState)
    return exec
  }

  export function setError(text, keepState) {
    exec('set error', text, keepState)
    return exec
  }

  export function setDuration(value) {
    exec('set duration', value)
    return exec
  }

  export function setLabel(text) {
    exec('set label', text)
    return exec
  }

  export function setBarLabel(text) {
    exec('set bar', text)
    return exec
  }

  export function removeActive() {
    exec('remove active')
    return exec
  }

  export function removeWarning() {
    exec('remove warning')
    return exec
  }

  export function removeSuccess() {
    exec('remove success')
    return exec
  }

  export function removeError() {
    exec('remove error')
    return exec
  }
</script>

<JQueryLazyLoader>
  <ProgressLoader>
    <div
      use:module="{settings}"
      data-value="{value}"
      data-total="{total}"
      class="{classNames(
        _class,
        'ui',
        speed,
        size,
        color,
        {
          indicating,
          disabled,
          error,
          warning,
          success,
          active,
          inverted,
          attached,
          indeterminate
        },
        'progress'
      )}"
    >
      <slot />
    </div>
  </ProgressLoader>
</JQueryLazyLoader>
