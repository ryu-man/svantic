<script>
    import { classNames, css } from '../../utils'
  
    let _class
    export { _class as class }
    export let style
    export let active = false
  </script>
  
  <slot name="title"/>
  <div use:css="{style}" class="{classNames(_class, { active }, 'content')}">
    <slot />
  </div>
  