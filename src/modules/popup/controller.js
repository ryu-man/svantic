import Controller from "../controller";

export default class PopupController extends Controller {
    setup() {
        this.selection.popup(this.settings);
    }

    // 	Shows popup
    show() {
        return this.customBehavior('show')
    }


    // 	Hides popup
    hide() {
        return this.customBehavior('hide')
    }


    // 	Hides all visible pop ups on the page
    hideAll() {
        return this.customBehavior('hide all')
    }


    // 	Returns current popup dom element
    getPopup() {
        return this.customBehavior('get popup')
    }


    // 	Changes current popup content
    changeContent(html) {
        return this.customBehavior('change content')
    }


    // 	Toggles visibility of popup
    toggle() {
        return this.customBehavior('toggle')
    }


    // 	Returns whether popup is visible
    isVisible() {
        return this.customBehavior('is visible')
    }


    // 	Returns whether popup is hidden
    isHidden() {
        return this.customBehavior('is hidden')
    }


    // 	Returns whether popup is created and inserted into the page
    exists() {
        return this.customBehavior('exists')
    }


    // 	Adjusts popup when content size changes (only necessary for centered popups)
    reposition() {
        return this.customBehavior('reposition')
    }


    // 	Repositions a popup
    setPosition(position) {
        return this.customBehavior('set position', position)
    }


    // 	Removes popup from the page and removes all events
    destroy() {
        return this.customBehavior('destroy')
    }


    // 	Removes popup from the page
    removePopup() {
        return this.customBehavior('remove popup')
    }


}
