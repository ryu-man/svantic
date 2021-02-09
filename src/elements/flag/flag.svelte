<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/flag.css'
  import { classNames } from '../../utils'

  let _class = ''
  export let isoCode = ''
</script>

<i class="{classNames(_class, isoCode, 'flag')}"></i>
