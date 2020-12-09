<script>
  export let style = {}
</script>

<div
  class="header"
  style="{Object.entries(style)
    .map((e) => `${e[0]}:${e[1]}`)
    .join(';')}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
