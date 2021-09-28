<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/slider.min.css'

  import { onMount as onMounted } from 'svelte'
  import { css, classNames } from '../../utils'
  import JQueryLazyLoader from '../loaders/JQueryLazyLoader.svelte'
  import SliderLoader from '../loaders/SliderLoader.svelte'
  import { slider } from '../module'
  let _class
  export { _class as class }
  export let size = ''
  export let color = ''
  export let disabled = false
  export let range = false
  export let inverted = false
  export let reversed = false
  export let vertical = false
  export let labeled = false
  export let ticked = false
  export let aligned
  export let style
  export let settings = {}
  export let onMount

  const executer = slider(settings)

  onMounted(() => {
    onMount?.($executer)
  })

  export function getValue() {
    return executer.module('get value')
  }

  export function getThumbValue(which) {
    return executer.module('get thumbValue', which)
  }

  export function getNumLabels() {
    return executer.module('get numLabels')
  }

  export function setValue(value) {
    executer.module('set value', value)
    return this
  }

  export function setRangeValue(fromValue, toValue) {
    executer.module('set rangeValue', fromValue, toValue)
    return this
  }
</script>

<JQueryLazyLoader>
  <SliderLoader>
    <div
      bind:this="{$executer}"
      use:css={style}
      class:inverted
      class:reversed
      class:vertical
      class="{classNames(
        _class,
        'ui',
        color,
        size,
        { disabled, aligned, labeled, ticked, range },
        'slider'
      )}"
    >
      <slot />
    </div>
  </SliderLoader>
</JQueryLazyLoader>
