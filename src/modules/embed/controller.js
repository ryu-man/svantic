export default class EmbedController {
    constructor(target) {
        this.jQuery = window['$'] || window['jQuery'];
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
