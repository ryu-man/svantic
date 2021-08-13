<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/checkbox.min.css'
  
  import { classNames, css } from '../../utils'
  import { JQueryLazyLoader, CheckboxLoader } from '../loaders'

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
    return this
  }

  export function check() {
    exec('check')
    return this
  }

  export function uncheck() {
    exec('uncheck')
    return this
  }

  export function indeterminate() {
    exec('indeterminate')
    return this
  }

  export function determinate() {
    exec('determinate')
    return this
  }

  export function enable() {
    exec('enable')
    return this
  }

  export function setChecked() {
    return exec('set checked')
  }

  export function setUnchecked() {
    exec('set unchecked')
    return this
  }

  export function setIndeterminate() {
    exec('set indeterminate')
    return this
  }

  export function setDeterminate() {
    exec('set determinate')
    return this
  }

  export function setEnabled() {
    exec('set enabled')
    return this
  }

  export function setDisabled() {
    exec('set disabled')
    return this
  }

  export function attachEvents(selector, behavior) {
    exec('attach events', selector, behavior)
    return this
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
