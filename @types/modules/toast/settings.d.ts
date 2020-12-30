import type { EasingType, TransitionType } from '../../transition';

export interface ToastSettings {
    /** Sets where the toast can be displayed. Can be top right, top center, top left, bottom right, bottom center and bottom left */
    position?: 'top' | 'right';
    /** Define the class of notification. Can be any existing color definition or info, success, warning and error. If ui message is used in className.toast option (see below), this option can hold any supported class of the message component */
    class?: 'neutral';
    /** Can hold a string to be added to the progress bar class, for example a separate color */
    classProgress?: boolean;
    /** Can hold a string to be added to the actions class to control its appearance. Usually a combination of basic, left, top, bottom, vertical and attached */
    classActions?: boolean;
    /** Can hold a string to be added to the image class. mini, tiny, small and avatar are supported out of the box */
    classImage?: 'mini';
    /** Set the time (in ms) of the toast appearance. Set 0 to disable the automatic dismissal. Set auto to calculate the time by the given amount of words within the toast */
    displayTime?: number;
    /** Minimum display time in case displayTime is set to 'auto' */
    minDisplayTime?: number;
    /** Base to calculate display time in case displayTime is set to 'auto' */
    wordsPerMinute?: number;
    /** If an URL to an image is given, that image will be shown to the left of the toast */
    showImage?: boolean;
    /** Define if the toast should display an icon which matches to a given class. If a string is given, this will be used as icon classname */
    showIcon?: boolean;
    /** This will make the toast closable by the top right corner icon instead of clicking anywhere on the toast when set to true. When set to left the closeIcon is shown to the left instead of right */
    closeIcon?: boolean;
    /** Set to false to avoid closing the toast when it is clicked */
    closeOnClick?: boolean;
    /** If a given DOM-Node should stay reusable by using a clone of it as toast. If set to false the original DOM-Node will be detached and removed from the DOM then the toast is closed */
    cloneModule?: boolean;
    /** Displays a progress bar on top or bottom increasing until displayTime is reached. . false won't display any progress bar. If displayTime option is 0, this option is ignored */
    showProgress?: boolean;
    /**
     * true: Increases the progress bar from 0% to 100%.
     * false: Decreases the progress bar?:from 100% to 0%.
     * */
    progressUp?: boolean;
    /** Set to false if the display timer should not pause when the toast is hovered */
    pauseOnHover?: boolean;
    /** true will display the toast in a fixed width, false displays the toast responsively with dynamic width */
    compact?: boolean;
    /** Opacity Value of the toast after the show-transition */
    opacity?: number;
    /** Define if new toasts should be displayed above the others */
    newestOnTop?: boolean;
    /** Whether HTML included in given title, message or actions should be preserved. Set to false in case you work with untrusted 3rd party content */
    preserveHTML?: boolean;
    /** Settings to set the transitions and durations during the show or the hide of a toast */
    transition?: {
        showMethod?: TransitionType;
        showDuration?: number;
        hideMethod?: TransitionType;
        hideDuration?: number;
        closeEasing?: EasingType;
    };
    /** Callback before toast is shown. Returning false from this callback will cancel the toast from showing. */
    onShow?: () => boolean;
    /** Callback after toast is shown. */
    onVisible?: () => void;
    /** Callback after popup is clicked in. */
    onClick?: () => void;
    /** Callback before toast is hidden. Returning false from this callback will cancel the toast from hiding. */
    onHide?: () => boolean;
    /** Callback after toast is hidden. */
    onHidden?: () => void;
    /** Callback before toast is destroyed. */
    onRemove?: () => void;
    /** Callback when an existing button with class positive or ok or approve is clicked. Return false to avoid closing the toast */
    onApprove?: () => boolean;
    /** Callback when an existing button with class negative or cancel or deny is clicked. Return false to avoid closing the toast */
    onDeny?: () => boolean;
    /** A title for the toast. Leave empty to not display it */
    title?: string;
    /** Message to display */
    message?: string;
    /** An array of objects. Each object defines an action with properties text,class,icon and click */
    action?: [
        {
            text?: string;
            class?: string;
            icon?: string;
            click?: () => void;
        }
    ];
}
