<script>
  import '../../../semantic/dist/components/emoji.min.css'
  import { classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let name
  export let disabled = false
  export let loading = false
  export let size
  export let link = false
</script>

<em
  data-emoji="{name}"
  class:disabled
  class:loading
  class:link
  class="{classNames(_class, size)}"></em>
