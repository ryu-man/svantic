import Controller from "../controller";

export default class ModalController extends Controller{
    
    setup() {
        this.selection.modal(this.settings);
    }
    /* Shows the modal */
    show() {
        this.customBehavior('show');
    }
    // 	Hides the modal
    hide() {
        this.customBehavior('hide');
    }
    // 	Toggles the modal
    toggle() {
        this.customBehavior('toggle');
    }
    // 	Refreshes centering of modal on page
    refresh() {
        this.customBehavior('refresh');
    }
    // 	Shows associated page dimmer
    showDimmer() {
        this.customBehavior('show dimmer');
    }
    // 	Hides associated page dimmer
    hideDimmer() {
        this.customBehavior('hide dimmer');
    }
    // 	Hides all modals not selected modal in a dimmer
    hideOthers() {
        this.customBehavior('hide others');
    }
    // 	Hides all visible modals in the same dimmer
    hideAll() {
        this.customBehavior('hide all');
    }
    // 	Caches current modal size
    cacheSizes() {
        this.customBehavior('cache sizes');
    }
    // 	Returns whether the modal can fit on the page
    canFit() {
        return this.customBehavior('can fit');
    }
    // 	Returns whether the modal is active
    isActive() {
        return this.customBehavior('is active');
    }
    // 	Sets modal to active
    setActive() {
        this.customBehavior('set active');
    }
    customBehavior(behavior, ...args) {
        return this.selection.modal(behavior, ...args);
    }
}
