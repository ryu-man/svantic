<script>
    import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/reveal.min.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let type = ''
  export let direction = ''
  export let state = ''
  export let instant = false
</script>

<div
  use:css="{style}"
  class:instant
  class="{classNames(_class, 'ui', {instant}, state, direction, type, 'reaveal')}"
>
  <slot />
</div>
