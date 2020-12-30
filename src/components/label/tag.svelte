<script>
  let _class = ''
  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)

    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a use:init class="ui tag label {_class}">
  <slot>
    <!-- optional fallback -->
  </slot>
</a>

<style global>
  @import '../../../fomantic/dist/components/label.css';
</style>
