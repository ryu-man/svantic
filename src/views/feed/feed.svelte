<script>
  import '../../../fomantic/dist/components/feed.css'

  import { classNames, css } from '../../utils'
  let _class = ''
  export { _class as class }
  export let size
  export let inverted = false
</script>

<div class:inverted class="{classNames(size, 'ui feed', _class)}">
  <div class="event">
    <slot />
  </div>
</div>
