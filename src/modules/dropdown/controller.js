import Controller from '../controller'

export default class DropdownController extends Controller {
  constructor(target, settings = {}) {
    super(target, settings)
  }

  moduleSync(...args) {
    return this.selection.dropdown(...args)
  }

  async module(...args) {
    await this.ready
    return this.selection.dropdown(...args)
  }
  
  async import() {
    if (!window.transition)
      await import('../../../semantic/dist/components/transition')
    if (!window.dropdown)
      await import('../../../semantic/dist/components/dropdown')
  }

  setupMenu(values) {
    this.module('setup menu', values)
  }

  changeValues(values) {
    this.module('change values', values)
  }

  refresh() {
    this.module('refresh ')
  }

  toggle() {
    this.module('toggle')
  }

  show(callback = () => {}, preventFocus = true) {
    this.module('show', callback, preventFocus)
  }

  hide(callback, preventBlur) {
    this.module('hide', callback, preventBlur)
  }

  clear(preventChangeTrigger) {
    this.module('clear', preventChangeTrigger)
  }

  hideOthers() {
    this.module('hide others')
  }

  restoreDefaults(preventChangeTrigger) {
    this.module('restore defaults', preventChangeTrigger)
  }

  restoreDefaultText() {
    this.module('restore default')
  }

  restorePlaceholderText() {
    this.module('restore placeholder')
  }

  restoreDefaultValue() {
    this.module('restore default')
  }

  saveDefaults() {
    this.module('save defaults')
  }

  setSelected(...args) {
    this.module('set selected', ...args)
  }

  removeSelected(value) {
    this.module('remove selected', value)
  }

  setExactly(...args) {
    this.module('set exactly', ...args)
  }

  setText(text) {
    this.module('set text', text)
  }

  setValue(value, text, $selected, preventChangeTrigger) {
    this.module('set value', value, text, $selected, preventChangeTrigger)
  }

  getText() {
    return this.module('get text')
  }

  getValue() {
    return this.module('get value')
  }

  getItem(value) {
    return this.module('get item', value)
  }

  bindTouchEvents() {
    this.module('bind touch')
  }

  bindMouseEvents() {
    this.module('bind mouse')
  }

  bindIntent() {
    this.module('bind intent')
  }

  unbindIntent() {
    this.module('unbind intent')
  }

  determineEventInModule() {
    this.module('determine eventInModule')
  }

  determineSelectAction(text, value) {
    this.module('determine select', text, value)
  }

  setActive() {
    this.module('set active')
  }

  setVisible() {
    this.module('set visible')
  }

  removeActive() {
    this.module('remove active')
  }

  removeVisible() {
    this.module('remove visible')
  }

  isSelection() {
    return this.module('is selection')
  }

  isAnimated() {
    return this.module('is animated')
  }

  isVisible() {
    return this.module('is visible')
  }

  isHidden() {
    return this.module('is hidden')
  }

  getDefaultText() {
    return this.module('get default')
  }

  getPlaceholderText() {
    return this.module('get placeholder')
  }
}
