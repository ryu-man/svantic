<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/popup.min.css'

  import { JQueryLazyLoader, PopupLoader } from '../loaders'

  export let settings = {}

  let exec

  export function show() {
    exec('show')
    return this
  }

  export function hide() {
    exec('hide')
    return this
  }

  export function hideAll() {
    exec('hide all')
    return this
  }

  export function getPopup() {
    exec('get popup')
    return this
  }

  export function changeContent(html) {
    exec('change content', html)
    return this
  }

  export function toggle() {
    exec('toggle')
    return this
  }

  export function isVisible() {
    return exec('is visible')
  }

  export function isHidden() {
    return exec('is hidden')
  }

  export function exists() {
    exec('exists')
    return this
  }

  export function reposition() {
    exec('reposition')
    return this
  }

  export function setPosition(position) {
    exec('set position', position)
    return this
  }

  export function removePopup() {
    exec('remove popup')
    return this
  }
</script>

<JQueryLazyLoader>
  <PopupLoader>
    <slot
      popup="{(node) => {
        exec = (...args) => jQuery(node).popup(...args)
        exec(settings)
        return jQuery(node).popup(settings)
      }}"
    />
  </PopupLoader>
</JQueryLazyLoader>
