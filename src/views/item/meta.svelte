

<script>
    import { classNames, css } from '../../utils'
  
  let _class
  export { _class as class }
  export let style
</script>

<div use:css={style} class="meta">
    <slot />
</div>