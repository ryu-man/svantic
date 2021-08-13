<script>
  import { highlight } from 'prismjs'
  import 'base16-prism/themes/base16-solarized-dark.css'
  import 'prism-svelte'

  export let code = ''

  let preview
  $: {
    preview = highlight(code.trim(), Prism.languages.svelte, 'svelte')
  }
</script>

<pre class="language-svelte">
    <code>
        {@html preview}
    </code>
</pre>

<style>
</style>
