<script>
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style
</script>

<div ue:css="{style}" class="{classNames(_class, 'sub header')}"><slot /></div>
