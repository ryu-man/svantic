<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/accordion.min.css'

  import { classNames, css } from '../../utils'
  import { JQueryLazyLoader, AccordionLoader } from '../loaders'

  let _class = ''
  export let fluid = false
  export let vertical = false
  export let following = false
  export let text = false
  export let menu = false
  export let styled = false
  export let inverted = false
  export let settings = {}
  export let style = {}

  /**
   * @type {SemanticUI.Accordion}
   */
  let exec
  function module(node, settings) {
    css(node, style)

    exec = (...args) => jQuery(node).accordion(...args)
    exec(settings)
  }

  export function refresh() {
    exec('refresh')
    return exec
  }

  export function open(index) {
    exec('open', index)
    return exec
  }

  export function closeOthers() {
    exec('close others')
    return exec
  }

  export function close(index) {
    exec('close', index)
    return exec
  }

  export function toggle(index) {
    exec('toggle', index)
    return exec
  }
</script>

<JQueryLazyLoader>
  <AccordionLoader>
    <div
      use:module="{settings}"
      class="{classNames(
        _class,
        'ui',
        {
          vertical,
          fluid,
          following,
          styled,
          inverted
        },
        'accordion',
        { text, menu }
      )}"
    >
      <slot />
    </div>
  </AccordionLoader>
</JQueryLazyLoader>
