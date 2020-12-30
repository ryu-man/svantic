import type { TransitionType } from '../../components/transitionnts/transition';
export interface ModalSettings {
    /** If set to false will prevent the modal from being moved to inside the dimmer */
    detachable?: boolean;
    /** Auto will automatically use flex in browsers that support absolutely positioned elements inside flex containers. Setting to true/false will force this setting for all browsers. */
    useFlex?: 'auto' | boolean;
    /** When true, the first form input inside the modal will receive focus when shown. Set this to false to prevent this behavior. */
    autofocus?: boolean;
    /** When false, the last focused element, before the modal was shown, will not get refocused again when the modal hides. This could prevent unwanted scrolling behaviors after closing a modal.new in 2.7.2 */
    restoreFocus?: boolean;
    /** Whether any change in modal DOM should automatically refresh cached positions */
    observeChanges?: boolean;
    /** If set to true will not close other visible modals when opening a new one */
    allowMultiple?: boolean;
    /** If inverted dimmer should be used */
    inverted?: boolean;
    /** If dimmer should blur background */
    blurring?: boolean;
    /** If modal should be center aligned */
    centered?: boolean;
    /** Whether to automatically bind keyboard shortcuts */
    keyboardShortcuts?: boolean;
    /** A vertical offset to allow for content outside of modal, for example a close button, to be centered. */
    offset?: number;
    /** Selector or jquery object specifying the area to dim */
    context?: HTMLElement;
    /** Setting to false will not allow you to close the modal by clicking on the dimmer */
    closable?: boolean;
    /** You can specify custom settings to extend UI dimmer */
    dimmerSettings?: {
        closable?: boolean;
        useCSS?: boolean;
    };
    /** Named transition to use when animating menu in and out, full list can be found in ui transitions docs. */
    transition?: TransitionType;
    /** Duration of animation */
    duration?: number;
    /** Whether additional animations should queue */
    queue?: boolean;
    /** Used internally to determine if the webkit custom scrollbar was clicked to prevent hiding the dimmer. This should be set to the same (numeric) value as defined for @customScrollbarWidth in site.less in case you are using a different theme */
    scrollbarWidth?: number;
    /** Is called when a modal starts to show. */
    onShow?: () => void;
    /** Is called after a modal has finished showing animating. */
    onVisible?: () => void;
    /** Is called after a modal starts to hide. If the function returns false, the modal will not hide. */
    onHide?: ($element: any) => boolean;
    /** Is called after a modal has finished hiding animation. */
    onHidden?: () => void;
    /** Is called after a positive, approve or ok button is pressed. If the function returns false, the modal will not hide. */
    onApprove?: ($element: any) => boolean;
    /** Is called after a negative, deny or cancel button is pressed. If the function returns false the modal will not hide. */
    onDeny?: ($element: any) => boolean;
}
