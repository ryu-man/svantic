<script>
  import '../../../semantic/dist/components/shape.css'
  import { css } from '../../utils'

  export let style = {}
  let _class = ''
  export { _class as class }
  // your script goes here
  //cude
  //text
  export let type = ''

</script>

<div use:css={style} class="{type} ui shape {_class}">
  <div class="sides">
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
</div>
