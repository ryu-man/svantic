<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/transition.css'
  import '../../../semantic/dist/components/shape.css'
  import { classNames, css } from '../../utils'

  export let style = {}
  let _class = ''
  export { _class as class }
  // your script goes here
  //cude
  //text
  export let type = ''
</script>

<div use:css="{style}" class="{classNames(_class, 'ui', type, 'shape')}">
  <div class="sides">
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
</div>
