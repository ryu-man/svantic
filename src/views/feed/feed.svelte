<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/feed.css'

  import { classNames, css } from '../../utils'
  let _class = ''
  export { _class as class }
  export let size
  export let inverted = false
</script>

<div class:inverted class="{classNames(_class, 'ui',size, 'feed')}">
  <div class="event">
    <slot />
  </div>
</div>
