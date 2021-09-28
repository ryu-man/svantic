<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/grid.min.css'
  import '../../../semantic/dist/components/icon.min.css'
  import '../../../semantic/dist/components/input.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/table.min.css'
  import '../../../semantic/dist/components/popup.min.css'
  import '../../../semantic/dist/components/calendar.min.css'

  import { onMount as onMounted } from 'svelte'
  import { css } from '../../utils'
  import { JQueryLazyLoader, CalendarLoader } from '../loaders'
  import { calendar } from '../module'

  let _class = ''
  export let icon = 'left'
  export let disabled = false
  export let settings = {}
  export let style = {}
  export { _class as class }
  export let onMount

  const executer = calendar(settings)

  onMounted(() => {
    onMount?.($executer)
  })

  export function refresh() {
    executer.module('refresh')
    return this
  }

  export function popup(...args) {
    executer.module('popup', args)
    return this
  }

  export function focus() {
    executer.module('focus')
    return this
  }

  export function blur() {
    executer.module('blur')
    return this
  }

  export function clear() {
    executer.module('clear')
    return this
  }

  export function getDate() {
    return executer.module('get date')
  }

  export function setDate(date, updateInput, fireChange) {
    executer.module('set date', date, updateInput, fireChange)
  }

  export function getMode() {
    return executer.module('get mode')
  }

  export function setMode(mode) {
    executer.module('set mode', mode)
    return this
  }

  export function getStartDate() {
    return executer.module('get start date')
  }

  export function setStartDate(date) {
    executer.module('set start date', date)
    return this
  }

  export function getEndDate() {
    return executer.module('get end date')
  }

  export function setEndDate(date) {
    executer.module('set end date', date)
  }

  export function getFocusDate() {
    return executer.module('get focus date')
  }

  export function setFocusDate(date) {
    executer.module('set focus date', date)
    return this
  }

  export function setMinDate(date) {
    executer.module('set min date', date)
    return this
  }

  export function setMaxDate(date) {
    executer.module('set max date', date)
    return this
  }
</script>

<JQueryLazyLoader>
  <CalendarLoader>
    <div
      bind:this="{$executer}"
      use:css="{style}"
      class="{_class} ui calendar"
      class:disabled
    >
      <div class="ui input {icon + ' icon'}">
        <slot>
          <i class="calendar icon"></i>
        </slot>
        <input type="text" placeholder="Date/Time" />
      </div>
    </div>
  </CalendarLoader>
</JQueryLazyLoader>
