import Controller from "../controller";

export default class PopupController extends Controller {
    setup() {
        this.selection.popup(this.settings);
    }
    
    show() {
        return this.customBehavior('show')
    }
    
    hide() {
        return this.customBehavior('hide')
    }
    
    hideAll() {
        return this.customBehavior('hide all')
    }
    
    getPopup() {
        return this.customBehavior('get popup')
    }
    
    changeContent(html) {
        return this.customBehavior('change content', html)
    }
    
    toggle() {
        return this.customBehavior('toggle')
    }
    
    isVisible() {
        return this.customBehavior('is visible')
    }
    
    isHidden() {
        return this.customBehavior('is hidden')
    }
    
    exists() {
        return this.customBehavior('exists')
    }
    
    reposition() {
        return this.customBehavior('reposition')
    }
    
    setPosition(position) {
        return this.customBehavior('set position', position)
    }
    
    destroy() {
        return this.customBehavior('destroy')
    }
    
    removePopup() {
        return this.customBehavior('remove popup')
    }
}
