<script>
  import { classNames, css } from '../../utils'
  let _class = ''
  export { _class as class }
  export let style
  export let src = ''
  export let alt = ''
  export let link = ''
</script>

<a use:css="{style}" class="{classNames(_class, 'ui image')}" href="{link}">
  <img src="{src}" alt="{alt}" />
</a>
