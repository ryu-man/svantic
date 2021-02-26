<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/emoji.min.css'
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
