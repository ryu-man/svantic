<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/text.css'
  import { css } from '../../utils'

  let _class = ''
  export let style = {}
  export { _class as class }
</script>

<span use:css="{style}" class="{_class} ui text">
  <slot>
    <!-- optional fallback -->
  </slot>
</span>
