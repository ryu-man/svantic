import Controller from "../controller";

export default class ToastController extends Controller{
    setup() {
        this.selection.toast(this.settings);
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
