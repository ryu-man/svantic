<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/feed.min.css'

  import { classNames, css } from '../../utils'
  let _class = ''
  export { _class as class }
  export let style
  export let size
  export let inverted = false
</script>

<div  use:css={style} class:inverted class="{classNames(_class, 'ui',size, 'feed')}">
  <div class="event">
    <slot />
  </div>
</div>
