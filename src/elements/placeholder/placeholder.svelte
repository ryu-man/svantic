<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/placeholder.min.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let inverted = false
  export let style = {}
</script>

<div
  use:css="{style}"
  class="{classNames(_class, 'ui', { inverted }, 'placeholder')}"
>
  <slot />
</div>
