export default class ProgressController {
    constructor(target) {
        this.jQuery = window['$'] || window['jQuery'];
        if (!this.jQuery)
            throw Error('jQuery not found, make sure you include jquery in the head tag');
        this.target = target;
        this.selection = this.jQuery(target);
    }
    init() {
        this.selection.dropdown(this.settings);
        return this;
    }
    setSettings(settings) {
        this.settings = settings;
        return this;
    }
    customBehavior(behavior, ...args) {
        return this.selection.dropdown(behavior, ...args);
    }
}
