<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/dropdown.min.css'

  import { onMount as onMounted } from 'svelte'
  import { css, classNames } from '../../utils'
  import { DropdownLoader, JQueryLazyLoader } from '../loaders'
  import { dropdown } from '../module'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let size = ''
  export let wide = ''
  export let active = false
  export let disabled = false
  export let loading
  export let error = false
  export let speed = ''
  export let height = ''
  export let column
  export let menuDirection = ''
  export let link = false
  export let item = false
  export let long = false
  export let fluid = false
  export let label = false
  export let compact = false
  export let inverted = false
  export let scrolling = false
  export let selection = false
  export let search = false
  export let clearable = false
  export let multiple = false
  export let floating = false
  export let labeled = false
  export let icon = false
  export let button = false
  export let inline = false
  export let pointing = false
  export let simple = false
  export let onMount

  export let settings = {}

  const executer = dropdown(settings)

  let _mounted

  onMounted(() => {
    onMount?.($executer)
  })

  $: executer.setSettings(settings)

  /*********************************************************************************************/

  export function mounted(callback) {
    _mounted = callback
  }

  export function setSettings(settings) {
    executer.setSettings(settings)
    return this
  }

  export function setupMenu(values) {
    executer.module('setup menu', values)
    return this
  }

  export function changeValues(values) {
    executer.module('change values', values)
    return this
  }

  export function refresh() {
    executer.module('refresh')
    return this
  }

  export function toggle() {
    executer.module('toggle')
    return this
  }

  export function show(callback = () => {}, preventFocus = true) {
    executer.module('show', callback, preventFocus)
    return this
  }

  export function hide(callback, preventBlur) {
    executer.module('hide', callback, preventBlur)
    return this
  }

  export function clear(preventChangeTrigger) {
    executer.module('clear', preventChangeTrigger)
    return this
  }

  export function hideOthers() {
    executer.module('hide others')
    return this
  }

  export function restoreDefaults(preventChangeTrigger) {
    executer.module('restore defaults', preventChangeTrigger)
    return this
  }

  export function restoreDefaultText() {
    executer.module('restore default')
    return this
  }

  export function restorePlaceholderText() {
    executer.module('restore placeholder')
    return this
  }

  export function restoreDefaultValue() {
    executer.module('restore default')
    return this
  }

  export function saveDefaults() {
    executer.module('save defaults')
    return this
  }

  export function setSelected(...args) {
    executer.module('set selected', ...args)
    return this
  }

  export function removeSelected(value) {
    executer.module('remove selected', value)
    return this
  }

  export function setExactly(...args) {
    executer.module('set exactly', ...args)
    return this
  }

  export function setText(text) {
    executer.module('set text', text)
    return this
  }

  export function setValue(value, text, $selected, preventChangeTrigger) {
    executer.module(
      'set value',
      value,
      text,
      $selected,
      preventChangeTrigger
    )
    return this
  }

  export function getText() {
    return executer.module('get text')
  }

  export function getValue() {
    return executer.module('get value')
  }

  export function getItem(value) {
    return executer.module('get item', value)
  }

  export function bindTouchEvents() {
    executer.module('bind touch')
    return this
  }

  export function bindMouseEvents() {
    executer.module('bind mouse')
    return this
  }

  export function bindIntent() {
    executer.module('bind intent')
    return this
  }

  export function unbindIntent() {
    executer.module('unbind intent')
    return this
  }

  export function determineEventInModule() {
    executer.module('determine eventInModule')
    return this
  }

  export function determineSelectAction(text, value) {
    executer.module('determine select', text, value)
    return this
  }

  export function setActive() {
    executer.module('set active')
    return this
  }

  export function setVisible() {
    executer.module('set visible')
    return this
  }

  export function removeActive() {
    executer.module('remove active')
    return this
  }

  export function removeVisible() {
    executer.module('remove visible')
    return this
  }

  export function isSelection() {
    return executer.module('is selection')
  }

  export function isAnimated() {
    return executer.module('is animated')
  }

  export function isVisible() {
    return executer.module('is visible')
  }

  export function isHidden() {
    return executer.module('is hidden')
  }

  export function getDefaultText() {
    return executer.module('get default')
  }

  export function getPlaceholderText() {
    return executer.module('get placeholder')
  }
</script>

<JQueryLazyLoader>
  <DropdownLoader>
    <div
      bind:this="{$executer}"
      use:css="{style}"
      class="{classNames(
        _class,
        'ui',
        height,
        column,
        speed,
        wide,
        size,
        menuDirection,
        {
          link,
          item,
          long,
          fluid,
          label,
          compact,
          scrolling,
          inverted,
          active,
          disabled,
          loading,
          error,
          selection,
          search,
          clearable,
          multiple,
          floating,
          labeled,
          icon,
          button,
          inline,
          pointing,
          simple
        },
        'dropdown'
      )}"
    >
      <slot />
    </div>
  </DropdownLoader>
</JQueryLazyLoader>
