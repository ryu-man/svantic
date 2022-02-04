<script context="module">
</script>

<script>
  import '../../semantic/dist/components/transition.min.css'
  import '../../semantic/dist/components/rating.min.css'
  
  import { createEventDispatcher, onMount as onMounted } from 'svelte'
  import { classNames, css } from '../../utils'
  import { rating as ratingModule } from '../utils'

  let _class
  export let style
  export { _class as class }
  export let disabled = false
  export let color = ''
  export let size = ''
  export let icon
  export let rating = '0'
  export let maxRating = '5'
  export let settings = {}
  export let onMount

  const executer = ratingModule(settings)
  const dispatch = createEventDispatcher();

  onMounted(() => {
    onMount?.($executer)
    dispatch('mount', $executer)
  })

  export function setRating(rating) {
    return executer.module('set rating', rating)
  }

  export function getRating() {
    return executer.module('get rating')
  }

  export function disable() {
    return executer.module('disable')
  }

  export function enable() {
    return executer.module('enable')
  }

  export function clearRating() {
    return executer.module('close rating')
  }

  export function ready() {
    return executer.ready
  }
</script>

  <div
    bind:this="{$executer}"
    use:css="{style}"
    class:disabled
    class="{classNames('ui', color, size, { icon }, 'rating', _class)}"
    data-rating="{rating}"
    data-max-rating="{maxRating}"
  ></div>
