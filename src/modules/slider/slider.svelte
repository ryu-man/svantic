<script context="module">
  import { sliderLoader } from '../utils'
  const isReady = sliderLoader()
</script>

<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/slider.min.css'

  import { createEventDispatcher, onMount as onMounted } from 'svelte'
  import { css, classNames } from '../../utils'
  import { slider } from '../utils'
  
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
  const dispatch = createEventDispatcher();

  onMounted(() => {
    onMount?.($executer)
    dispatch('mount', $executer)
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

  export function ready(){
    return isReady
  }
</script>

{#await isReady then value}
  <div
    bind:this="{$executer}"
    use:css="{style}"
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
{/await}
