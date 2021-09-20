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

  import { css } from '../../utils'
  import { JQueryLazyLoader, CalendarLoader } from '../loaders'

  let _class = ''
  export let icon = 'left'
  export let disabled = false
  export let settings = {}
  export let style = {}
  export { _class as class }

  /**
   * @type {SemanticUI.Calendar}
   */
  let exec
  function module(node, settings) {
    css(node, style)

    exec = (...args) => jQuery(node).calendar(...args)
    exec(settings)
  }

  export function refresh() {
    exec('refresh')
    return this
  }

  export function popup(...args) {
    exec('popup', args)
    return this
  }

  export function focus() {
    exec('focus')
    return this
  }

  export function blur() {
    exec('blur')
    return this
  }

  export function clear() {
    exec('clear')
    return this
  }

  export function getDate() {
    return exec('get date')
  }

  export function setDate(date, updateInput, fireChange) {
    exec('set date', date, updateInput, fireChange)
  }

  export function getMode() {
    return exec('get mode')
  }

  export function setMode(mode) {
    exec('set mode', mode)
    return this
  }

  export function getStartDate() {
    return exec('get start date')
  }

  export function setStartDate(date) {
    exec('set start date', date)
    return this
  }

  export function getEndDate() {
    return exec('get end date')
  }

  export function setEndDate(date) {
    exec('set end date', date)
  }

  export function getFocusDate() {
    return exec('get focus date')
  }

  export function setFocusDate(date) {
    exec('set focus date', date)
    return this
  }

  export function setMinDate(date) {
    exec('set min date', date)
    return this
  }

  export function setMaxDate(date) {
    exec('set max date', date)
    return this
  }
</script>

<JQueryLazyLoader>
  <CalendarLoader>
    <div use:module="{settings}" class="{_class} ui calendar" class:disabled>
      <div class="ui input {icon + ' icon'}">
        <slot>
          <i class="calendar icon"></i>
        </slot>
        <input type="text" placeholder="Date/Time" />
      </div>
    </div>
  </CalendarLoader>
</JQueryLazyLoader>
