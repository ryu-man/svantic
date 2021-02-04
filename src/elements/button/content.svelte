<script>
  export let hidden = false
</script>

<div class:visible="{!hidden}" class:hidden class="content">
  <slot />
</div>
