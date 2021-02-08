<script>
  import { classNames, css } from '../../utils'
  
  let _class = ''
  export {_class as class}
  export let header = false
  export let square = false
  export let style = {}
</script>

<div use:css="{style}" class="{classNames(_class,{header, square},'image')}">
  <slot />
</div>
