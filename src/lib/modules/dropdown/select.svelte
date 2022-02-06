<script>
  import Dropdown from './dropdown.svelte'

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
  export let multiple
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
  export let floating = false
  export let labeled = false
  export let icon = false
  export let button = false
  export let inline = false
  export let pointing = false
  export let simple = false

  export let onMount

  export let settings = {}

  let instance

  /*********************************************************************************************/
  export function setSettings(settings) {
    instance.setSettings(settings)
    return this
  }

  export function setupMenu(values) {
    instance.module('setup menu', values)
    return this
  }

  export function changeValues(values) {
    instance.module('change values', values)
    return this
  }

  export function refresh() {
    instance.module('refresh')
    return this
  }

  export function toggle() {
    instance.module('toggle')
    return this
  }

  export function show(callback = () => {}, preventFocus = true) {
    instance.module('show', callback, preventFocus)
    return this
  }

  export function hide(callback, preventBlur) {
    instance.module('hide', callback, preventBlur)
    return this
  }

  export function clear(preventChangeTrigger) {
    instance.module('clear', preventChangeTrigger)
    return this
  }

  export function hideOthers() {
    instance.module('hide others')
    return this
  }

  export function restoreDefaults(preventChangeTrigger) {
    instance.module('restore defaults', preventChangeTrigger)
    return this
  }

  export function restoreDefaultText() {
    instance.module('restore default')
    return this
  }

  export function restorePlaceholderText() {
    instance.module('restore placeholder')
    return this
  }

  export function restoreDefaultValue() {
    instance.module('restore default')
    return this
  }

  export function saveDefaults() {
    instance.module('save defaults')
    return this
  }

  export function setSelected(...args) {
    instance.module('set selected', ...args)
    return this
  }

  export function removeSelected(value) {
    instance.module('remove selected', value)
    return this
  }

  export function setExactly(...args) {
    instance.module('set exactly', ...args)
    return this
  }

  export function setText(text) {
    instance.module('set text', text)
    return this
  }

  export function setValue(value, text, $selected, preventChangeTrigger) {
    instance.module('set value', value, text, $selected, preventChangeTrigger)
    return this
  }

  export function getText() {
    return instance.module('get text')
  }

  export function getValue() {
    return instance.module('get value')
  }

  export function getItem(value) {
    return instance.module('get item', value)
  }

  export function bindTouchEvents() {
    instance.module('bind touch')
    return this
  }

  export function bindMouseEvents() {
    instance.module('bind mouse')
    return this
  }

  export function bindIntent() {
    instance.module('bind intent')
    return this
  }

  export function unbindIntent() {
    instance.module('unbind intent')
    return this
  }

  export function determineEventInModule() {
    instance.module('determine eventInModule')
    return this
  }

  export function determineSelectAction(text, value) {
    instance.module('determine select', text, value)
    return this
  }

  export function setActive() {
    instance.module('set active')
    return this
  }

  export function setVisible() {
    instance.module('set visible')
    return this
  }

  export function removeActive() {
    instance.module('remove active')
    return this
  }

  export function removeVisible() {
    instance.module('remove visible')
    return this
  }

  export function isSelection() {
    return instance.module('is selection')
  }

  export function isAnimated() {
    return instance.module('is animated')
  }

  export function isVisible() {
    return instance.module('is visible')
  }

  export function isHidden() {
    return instance.module('is hidden')
  }

  export function getDefaultText() {
    return instance.module('get default')
  }

  export function getPlaceholderText() {
    return instance.module('get placeholder')
  }
</script>

<Dropdown bind:this={instance} as="select" {...$$restProps}>
  <slot />
</Dropdown>
