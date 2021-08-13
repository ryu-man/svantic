<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/embed.min.css'

  import { css } from '../../utils'
  import { JQueryLazyLoader, EmbedLoader } from '../../loaders'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let data = {}

  let _data = {
    source: '',
    id: '',
    placeholder: '',
    ...data
  }

  /**
   * @type {SemanticUI.EmbedSettings.Param}
   */
   export let settings = {}

/**
 * @type {SemanticUI.Embed}
 */
let exec
function module(node, settings) {
  css(node, style)

  /**
   * @type {JQueryStatic}
   */
  const jQuery = window['JQuery']

  exec = (args) => jQuery(node).embed(args)
  exec(settings)
}

  export function change(source, id, url) {
    exec('change', source, id, url)
    return exec
  }

  export function reset() {
    exec('reset')
    return exec
  }

  export function show() {
    exec('show')
    return exec
  }

  export function hide() {
    exec('hide')
    return exec
  }

  export function getId() {
    return exec('get id')
  }

  export function getPlaceholder() {
    return exec('get placeholder')
  }

  export function getSources() {
    return exec('get sources')
  }

  export function getType() {
    return exec('get type')
  }

  export function getUrl() {
    return exec('get url')
  }

  export function hasPlaceholder() {
    return exec('has placeholder')
  }
</script>

<JQueryLazyLoader>
  <EmbedLoader>
    <div
      use:module="{settings}"
      use:css="{style}"
      class="{_class} ui embed"
      data-source="{_data.source}"
      data-id="{_data.id}"
      data-placeholder="{_data.placeholder}"
    >
      <slot />
    </div>
  </EmbedLoader>
</JQueryLazyLoader>
