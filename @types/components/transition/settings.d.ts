export default class Settings {
    /**
     * @typedef {Object} Settings
     *@property {string} [animation = fade] - Named animation event to used. Must be defined in CSS.
     *@property {number} [interval = 0] - Interval in MS between each elements transition
     *@property {string} [reverse = auto] - When an interval is specified, sets order of animations. auto reverses only animations that are hiding.
     *@property {boolean} [displayType = false] - Specify the final display type (block, inline-block etc) so that it doesn't have to be calculated.
     *@property {string} [duration = 500ms] - Duration of the CSS transition animation
     *@property {boolean} [useFailSafe = true] - If enabled a timeout will be added to ensure animationend callback occurs even if element is hidden
     *@property {boolean} [allowRepeats = false] - If enabled will allow same animation to be queued while it is already occurring
     *@property {boolean} [queue = true] - Whether to automatically queue animation if another is occurring
     *@property {boolean} [skipInlineHidden = false] - Whether initially inline hidden objects should be skipped for transition. Useful, if you do the transition for child objects also, but want to have inline hidden childs (defined by style="display:none;") still kept hidden while the parent gets animated. Accordion uses this.
     *@property {Function} onShow - Callback on each transition that changes visibility to shown
     *@property {Function} onHide - Callback on each transition that changes visibility to hidden
     *@property {Function} onStart - Callback on animation start, useful for queued animations
     *@property {Function} onComplete - Callback on each transition complete
     */
    /**@type {Settings} */
    settings: {
        /**
         * - Named animation event to used. Must be defined in CSS.
         */
        animation?: string;
        /**
         * - Interval in MS between each elements transition
         */
        interval?: number;
        /**
         * - When an interval is specified, sets order of animations. auto reverses only animations that are hiding.
         */
        reverse?: string;
        /**
         * - Specify the final display type (block, inline-block etc) so that it doesn't have to be calculated.
         */
        displayType?: boolean;
        /**
         * ms] - Duration of the CSS transition animation
         */
        duration?: string;
        /**
         * - If enabled a timeout will be added to ensure animationend callback occurs even if element is hidden
         */
        useFailSafe?: boolean;
        /**
         * - If enabled will allow same animation to be queued while it is already occurring
         */
        allowRepeats?: boolean;
        /**
         * - Whether to automatically queue animation if another is occurring
         */
        queue?: boolean;
        /**
         * - Whether initially inline hidden objects should be skipped for transition. Useful, if you do the transition for child objects also, but want to have inline hidden childs (defined by style="display:none;") still kept hidden while the parent gets animated. Accordion uses this.
         */
        skipInlineHidden?: boolean;
        /**
         * - Callback on each transition that changes visibility to shown
         */
        onShow: Function;
        /**
         * - Callback on each transition that changes visibility to hidden
         */
        onHide: Function;
        /**
         * - Callback on animation start, useful for queued animations
         */
        onStart: Function;
        /**
         * - Callback on each transition complete
         */
        onComplete: Function;
    };
}
