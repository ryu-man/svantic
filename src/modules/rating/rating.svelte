<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/rating.min.css'

  import { css } from '../../utils'
  import { JQueryLazyLoader, RatingLoader } from '../loaders'

  let _class
  export let style
  export { _class as class }
  export let disabled = false
  export let color = ''
  export let size = ''
  export let icon
  export let rating = '0'
  export let maxRating = '5'

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

    exec = (args) => jQuery(node).rating(args)
    exec(settings)
  }

  export function setRating(rating) {
    return exec('set rating', rating)
  }

  export function getRating() {
    return exec('get rating')
  }

  export function disable() {
    return exec('disable')
  }

  export function enable() {
    return exec('enable')
  }

  export function clearRating() {
    return exec('close rating')
  }
</script>

<JQueryLazyLoader>
  <RatingLoader>
    <div
      use:module="{settings}"
      class:disabled
      class="{color} {size} ui rating {_class}"
      data-rating="{rating}"
      data-max-rating="{maxRating}"
    ></div>
  </RatingLoader>
</JQueryLazyLoader>
