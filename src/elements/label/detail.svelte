<script>
    import {classNames} from '../../utils'
    
    let _class
    export {_class as class}
</script>

<div class={classNames (_class, 'detail')}>
    <slot />
</div>