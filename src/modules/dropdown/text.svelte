<script>
    import {css, classNames} from '../../utils'
    
    let _class
    export {_class as class}
    export let style
</script>

<div use:css={style} class="{classNames(_class,"text")}">
    <slot />
</div>
