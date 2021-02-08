<script>
  import { classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let unstackable = false
  export let divided = false
  export let relaxed = false
  export let link = false
  export let inverted = false
</script>

<div
  class:unstackable
  class:divided
  class:relaxed
  class:link
  class:inverted
  class="{classNames(_class,'ui',{unstackable, divided, relaxed, link, inverted}, 'items')}"
>
  <slot />
</div>
