<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/item.css'

  import { classNames, css } from '../../utils'
  
  let _class
  export { _class as class }
  export let style
</script>

<div use:css={style} class="{classNames(_class, 'item')}">
  <slot />
</div>
