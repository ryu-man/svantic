<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/transition.css'
  import '../../../semantic/dist/components/flag.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style
  export let isoCode = ''
</script>

<i use:css="{style}" class="{classNames(_class, isoCode, 'flag')}"></i>
