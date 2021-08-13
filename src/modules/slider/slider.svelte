<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/slider.min.css'

  import { css, classNames } from '../../utils'
  import JQueryLazyLoader from '../loaders/JQueryLazyLoader.svelte'
  import SliderLoader from '../loaders/SliderLoader.svelte'

  let _class
  export { _class as class }
  export let type = ''
  export let size = ''
  export let state = ''
  export let color = ''
  export let inverted = false
  export let reversed = false
  export let vertical = false
  export let style

  /**
   * @type {SemanticUI.SliderSettings.Param}
   */
  export let settings = {}

  /**
   * @type {SemanticUI.Slider}
   */
  let exec
  function module(node, settings) {
    css(node, style)

    /**
     * @type {JQueryStatic}
     */
    const jQuery = window['JQuery']

    exec = (args) => jQuery(node).slider(args)
    exec(settings)
  }

  export function getValue() {
    return exec('get value', arguments)
  }

  export function getThumbValue(which) {
    return exec('get thumbValue', which)
  }

  export function getNumLabels() {
    return exec('get numLabels')
  }

  export function setValue(value) {
    exec('set value', value)
    return this
  }

  export function setRangeValue(fromValue, toValue) {
    exec('set rangeValue', fromValue, toValue)
    return this
  }
</script>

<JQueryLazyLoader>
  <SliderLoader>
    <div
      use:module="{settings}"
      class:inverted
      class:reversed
      class:vertical
      class="{classNames(state, color, size, type, 'ui slide', _class)}"
    >
      <slot />
    </div>
  </SliderLoader>
</JQueryLazyLoader>
