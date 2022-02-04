<script context="module">
</script>

<script>
  import '../../semantic/dist/components/site.min.css'
  import '../../semantic/dist/components/reset.min.css'
  import '../../semantic/dist/components/transition.min.css'
  import '../../semantic/dist/components/sticky.min.css'
  
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style

  /**
   * @type {SemanticUI.DropdownSettings.Param}
   */
  export let settings = {}

  /**
   * @type {SemanticUI.Dropdown}
   */
  let exec
  function module(node, settings) {
    css(node, style)

    /**
     * @type {JQueryStatic}
     */
    const jQuery = window['JQuery']

    exec = (args) => jQuery(node).sticky(args)
    exec(settings)
  }
</script>

  <div
    use:css="{style}"
    use:module="{settings}"
    class="{classNames(_class, 'ui sticky')}"
  >
    <slot />
  </div>
