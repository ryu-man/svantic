<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/item.min.css'

  import { classNames, css } from '../../utils'
  
  let _class
  export { _class as class }
  export let style
</script>

<div use:css={style} class="{classNames(_class, 'item')}">
  <slot />
</div>
