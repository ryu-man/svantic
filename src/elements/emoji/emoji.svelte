<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/transition.css'
  import '../../../semantic/dist/components/emoji.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style
  export let name
  export let disabled = false
  export let loading = false
  export let size
  export let link = false
</script>

<em
  use:css="{style}"
  data-emoji="{name}"
  class="{classNames(_class,{disabled, loading, link}, size)}"></em>
