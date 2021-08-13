<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/checkbox.min.css'
  
  import { classNames, css } from '../../utils'
  import { JQueryLazyLoader, CheckboxLoader } from '../../loaders'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let settings = {}
  export let id
  export let type = ''
  export let state = ''
  export let fitted = false
  export let inverted = false

  /**
   * @type {SemanticUI.Checkbox}
   */
  let exec
  function module(node, settings) {
    css(node, style)

    /**
     * @type {JQueryStatic}
     */
    const jQuery = window['JQuery']

    exec = (args) => jQuery(node).checkbox(args)
    exec(settings)
  }

  export function toggle() {
    exec('toggle')
    return exec
  }

  export function check() {
    exec('check')
    return exec
  }

  export function uncheck() {
    exec('uncheck')
    return exec
  }

  export function indeterminate() {
    exec('indeterminate')
    return exec
  }

  export function determinate() {
    exec('determinate')
    return exec
  }

  export function enable() {
    exec('enable')
    return exec
  }

  export function setChecked() {
    return exec('set checked')
  }

  export function setUnchecked() {
    exec('set unchecked')
    return exec
  }

  export function setIndeterminate() {
    exec('set indeterminate')
    return exec
  }

  export function setDeterminate() {
    exec('set determinate')
    return exec
  }

  export function setEnabled() {
    exec('set enabled')
    return exec
  }

  export function setDisabled() {
    exec('set disabled')
    return exec
  }

  export function attachEvents(selector, behavior) {
    exec('attach events', selector, behavior)
    return exec
  }

  export function isRadio() {
    return exec('is radio')
  }

  export function isChecked() {
    return exec('is checked')
  }

  export function isUnchecked() {
    return exec('is unchecked')
  }

  export function canChange() {
    return exec('can change')
  }

  export function shouldAllowCheck() {
    return exec('should allow check')
  }

  export function shouldAllowUncheck() {
    return exec('should allow uncheck')
  }

  export function shouldAllowDeterminate() {
    return exec('should allow determinate')
  }

  export function shouldAllowIndeterminate() {
    return exec('should allow indeterminate')
  }

  export function canUncheck() {
    return exec('can uncheck')
  }
</script>

<JQueryLazyLoader>
  <CheckboxLoader>
    <div
      use:module="{settings}"
      class="{classNames(
        _class,
        'ui',
        type,
        state,
        { fitted, inverted },
        'checkbox'
      )}"
    >
      <input type="checkbox" name="" />
      <slot />
    </div>
  </CheckboxLoader>
</JQueryLazyLoader>
