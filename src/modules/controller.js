export default class Controller {
    constructor(target, settings = {}) {
        this.jQuery = window['$'] || window['jQuery'];
        this.settings = settings;
        this.target = target;
        this.selection = this.jQuery(target);

        this.setup()
    }
    setup() { }
    init() {
        this.setup();
        return this;
    }
    setSettings(settings) {
        this.settings = settings;
        this.setup();
        return this;
    }
    customBehavior(behavior, ...args) {
        return this.selection.__proto__[this.type](behavior, ...args);
    }
}