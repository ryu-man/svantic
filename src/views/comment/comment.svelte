<script>
  import '../../../semantic/dist/components/comment.css'
  import { classNames } from '../../utils'
  let _class
  export { _class as class }
</script>

<div class="{classNames(_class, 'comment')}">
  <slot />
</div>
