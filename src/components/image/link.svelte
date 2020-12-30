<script>
  let _class = ''
  export let src = ''
  export let alt = ''
  export let link = ''
  export { _class as class }
</script>

<a class="ui image {_class}" href="{link}"> <img src="{src}" alt="{alt}" > </a>

<style global>
  @import '../../../fomantic/dist/components/image.css';
</style>