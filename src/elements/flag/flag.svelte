<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/flag.min.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style
  export let isoCode = ''
</script>

<i use:css="{style}" class="{classNames(_class, isoCode, 'flag')}"></i>
