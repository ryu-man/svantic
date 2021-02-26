<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/text.min.css'
  import { classNames, css } from '../../utils'

  let _class
  export let style
  export { _class as class }
</script>

<span use:css="{style}" class="{classNames(_class, 'ui text')}">
  <slot />
</span>
