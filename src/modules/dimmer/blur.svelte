<script>
  let _class = ''
  export let style = {}

  export { _class as class }
</script>

<div
  class="{_class} ui blurring"
  style="{Object.entries(style)
    .map((e) => `${e[0]}:${e[1]}`)
    .join(';')}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
</style>
