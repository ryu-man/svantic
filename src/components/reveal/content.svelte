<script>
  let _class = ''
  export let style = {}
  //visible
  //hidden
  export let state = ''
  export { _class as class }

  function init(node) {
    css(node, style)
  }
</script>

<div
  class="{_class} {state} content"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

