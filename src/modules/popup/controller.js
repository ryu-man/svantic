export default class PopupController {
    constructor(target) {
        this.jQuery = window['$'] || window['jQuery'];
        this.settings = {};
        if (!this.jQuery)
            throw Error('jQuery not found, make sure you include jquery in the head tag');
        this.target = target;
        this.selection = this.jQuery(this.target);
        this.selection.popup(this.settings);
    }
    
    setSettings(settings) {
        this.settings = settings;
        this.selection.popup(this.settings);
        return this;
    }

    // 	Shows popup
    show() {
        this.customBehavior('show ')
    }


    // 	Hides popup
    hide() {
        this.customBehavior('hide ')
    }


    // 	Hides all visible pop ups on the page
    hideAll() {
        this.customBehavior('hide all')
    }


    // 	Returns current popup dom element
    getPopup() {
        this.customBehavior('get popup')
    }


    // 	Changes current popup content
    changeContent(html) {
        this.customBehavior('change content')
    }


    // 	Toggles visibility of popup
    toggle() {
        this.customBehavior('toggle ')
    }


    // 	Returns whether popup is visible
    isVisible() {
        this.customBehavior('is visible')
    }


    // 	Returns whether popup is hidden
    isHidden() {
        this.customBehavior('is hidden')
    }


    // 	Returns whether popup is created and inserted into the page
    exists() {
        this.customBehavior('exists ')
    }


    // 	Adjusts popup when content size changes (only necessary for centered popups)
    reposition() {
        this.customBehavior('reposition ')
    }


    // 	Repositions a popup
    setPosition(position) {
        this.customBehavior('set position')
    }


    // 	Removes popup from the page and removes all events
    destroy() {
        this.customBehavior('destroy ')
    }


    // 	Removes popup from the page
    removePopup() {
        this.customBehavior('remove popup')
    }


}
