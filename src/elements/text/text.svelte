<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/transition.css'
  import '../../../semantic/dist/components/text.css'
  import { classNames, css } from '../../utils'

  let _class
  export let style
  export { _class as class }
</script>

<span use:css="{style}" class="{classNames(_class, 'ui text')}">
  <slot />
</span>
