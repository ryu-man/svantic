import Controller from "../controller";

// import type { DimmerSettings } from './settings'
export default class DimmerController extends Controller {
    setup() {
        this.selection.dimmer(this.settings);
    }

    addContent(element) {
        return this.customBehavior('add content')
    }

    show() {
        return this.customBehavior('show')

    }

    hide() {
        return this.customBehavior('hide')

    }

    toggle() {
        return this.customBehavior('toggle')

    }

    setOpacity(opacity) {
        return this.customBehavior('set opacity')

    }

    create() {
        return this.customBehavior('create')

    }

    getDuration() {
        return this.customBehavior('get duration')

    }

    getDimmer() {
        return this.customBehavior('get dimmer')

    }

    hasDimmer() {
        return this.customBehavior('has dimmer')

    }

    isActive() {
        return this.customBehavior('is active')

    }

    isAnimating() {
        return this.customBehavior('is animating')

    }

    isDimmer() {
        return this.customBehavior('is dimmer')

    }

    isDimmable() {
        return this.customBehavior('is dimmable')

    }


    isDisabled() {
        return this.customBehavior('is disabled')

    }

    isEnabled() {
        return this.customBehavior('is enabled')

    }

    isPage() {
        return this.customBehavior('is page')

    }

    ageDimmer() {
        return this.customBehavior('isPageDimmer')

    }

    setActive() {
        return this.customBehavior('set active')

    }

    setDimmable() {
        return this.customBehavior('set dimmable')

    }

    setDimmed() {
        return this.customBehavior('set dimmed')

    }

    setPageDimmer() {
        return this.customBehavior('setPageDimmer')

    }

    setDisabled() {
        return this.customBehavior('set disabled')

    }
}
