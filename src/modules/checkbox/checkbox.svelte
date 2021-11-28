<script context="module">
  import { checkboxLoader } from '../utils'
  const isReady = checkboxLoader()
</script>

<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/checkbox.min.css'

  import { createEventDispatcher, onMount as onMounted } from 'svelte'
  import { classNames, css } from '../../utils'
  import { checkbox } from '../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let settings = {}
  export let id
  export let type = ''
  export let state = ''
  export let fitted = false
  export let inverted = false
  export let onMount

  const executer = checkbox(settings)
  const dispatch = createEventDispatcher();

  onMounted(() => {
    onMount?.($executer)
    dispatch('mount', $executer)
  })

  export function toggle() {
    executer.module('toggle')
    return this
  }

  export function check() {
    executer.module('check')
    return this
  }

  export function uncheck() {
    executer.module('uncheck')
    return this
  }

  export function indeterminate() {
    executer.module('indeterminate')
    return this
  }

  export function determinate() {
    executer.module('determinate')
    return this
  }

  export function enable() {
    executer.module('enable')
    return this
  }

  export function setChecked() {
    return executer.module('set checked')
  }

  export function setUnchecked() {
    executer.module('set unchecked')
    return this
  }

  export function setIndeterminate() {
    executer.module('set indeterminate')
    return this
  }

  export function setDeterminate() {
    executer.module('set determinate')
    return this
  }

  export function setEnabled() {
    executer.module('set enabled')
    return this
  }

  export function setDisabled() {
    executer.module('set disabled')
    return this
  }

  export function attachEvents(selector, behavior) {
    executer.module('attach events', selector, behavior)
    return this
  }

  export function isRadio() {
    return executer.module('is radio')
  }

  export function isChecked() {
    return executer.module('is checked')
  }

  export function isUnchecked() {
    return executer.module('is unchecked')
  }

  export function canChange() {
    return executer.module('can change')
  }

  export function shouldAllowCheck() {
    return executer.module('should allow check')
  }

  export function shouldAllowUncheck() {
    return executer.module('should allow uncheck')
  }

  export function shouldAllowDeterminate() {
    return executer.module('should allow determinate')
  }

  export function shouldAllowIndeterminate() {
    return executer.module('should allow indeterminate')
  }

  export function canUncheck() {
    return executer.module('can uncheck')
  }

  export function ready(){
    return isReady
  }
</script>

{#await isReady then value}
  <div
    bind:this="{$executer}"
    use:css="{style}"
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
{/await}
