<script>
  import '../../../semantic/dist/components/divider.css'
  import { classNames, css } from '../../utils'

  export let style = {}
  export let type = ''
  export let aligned = ''
  export let clearing = false
  export let section = false
  export let hidden = false
  export let fitted = false
  export let ignored = false
  export let vertical = false
  export let inverted = false
  let _class = ''
  export { _class as class }

</script>

<div class="{classNames('ui',[aligned, 'aligned'], {clearing, section, hidden, fitted, ignored, vertical, inverted}, _class, 'divider')}">
  <slot />
</div>