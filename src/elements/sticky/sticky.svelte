<script>
  import '../../../semantic/dist/components/sticky.css'
  import { css, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
</script>

<div use:css="{style}" class="{classNames('ui sticky', _class)}">
  <slot />
</div>
