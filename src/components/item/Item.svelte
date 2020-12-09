<script lang="ts">
  import { css } from '../../utils/css'
  let _class = ''
  export let style: {} = {}
  export let imageSrc: string = ''
  export { _class as class }
</script>

<div use:css="{style}" class="{_class} item">
  <div class="image">
    <!-- svelte-ignore missing-declaration -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="{imageSrc}" />
  </div>
  <div class="content">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="header">
      <slot name="header">
        <!-- optional fallback -->
      </slot>
    </a>
    <div class="meta">
      <slot name="meta">
        <!-- optional fallback -->
      </slot>
    </div>
    <div class="description">
      <slot name="description">
        <!-- optional fallback -->
      </slot>
    </div>
    <div class="extra">
      <slot name="extra">
        <!-- optional fallback -->
      </slot>
    </div>
  </div>
</div>

<style global>
  @import '../../../fomantic/dist/components/item.css';
</style>
