<script>
  import { classNames } from '../../utils'

  export let align
</script>

<div class="{classNames({align}, 'content')}">
  <slot />
</div>
