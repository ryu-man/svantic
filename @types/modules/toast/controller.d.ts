import type { ToastSettings } from './settings';

export default class ToastController {
    jQuery: any;
    target: HTMLElement;
    settings: ToastSettings;
    selection: any;
    constructor(target: string | HTMLElement);
    init(): ToastController;
    setSettings(settings: ToastSettings): ToastController;
    customBehavior(behavior: any, ...args: any[]): any;
    /**
     *@description 	Pauses the display time decrease (and possible progress bar animation)
     */
    animatePause(): void;
    /**
     *@description 	Continues decreasing display time (and possible progress bar animation)
     */
    animateContinue(): void;
    /**
     *@description 	Closes the toast
     */
    close(): void;
    /**
     *@description 	Returns all toasts as an array of objects which are visible within the current toast-container
     */
    getToasts(): any[];
    /**
     *@description 	Returns the remaining time in milliseconds
     */
    getRemainingTime(): number;
}
