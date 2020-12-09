export default class ToastController {
    constructor(target) {
        this.jQuery = window['$'] || window['jQuery'];
        if (!this.jQuery)
            throw Error('jQuery not found, make sure you include jquery in the head tag');
        this.target = target;
        this.selection = this.jQuery(target);
    }
    init() {
        this.selection.toast(this.settings);
        return this;
    }
    setSettings(settings) {
        this.settings = settings;
        return this;
    }
    customBehavior(behavior, ...args) {
        return this.selection.toast(behavior, ...args);
    }
    /**
     *@description 	Pauses the display time decrease (and possible progress bar animation)
     */
    animatePause() {
        this.customBehavior('animate pause');
    }
    /**
     *@description 	Continues decreasing display time (and possible progress bar animation)
     */
    animateContinue() {
        this.customBehavior('animate continue');
    }
    /**
     *@description 	Closes the toast
     */
    close() {
        this.customBehavior('close');
    }
    /**
     *@description 	Returns all toasts as an array of objects which are visible within the current toast-container
     */
    getToasts() {
        return this.customBehavior('get toasts');
    }
    /**
     *@description 	Returns the remaining time in milliseconds
     */
    getRemainingTime() {
        return this.customBehavior('get remainingTime');
    }
}
