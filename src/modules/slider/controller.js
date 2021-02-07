import Controller from "../controller";

export default class SliderController extends Controller {
    constructor(target, settings = {}) {
        super(target, settings)
    }

    moduleSync(...args) {
        return this.selection.slider(...args)
    }

    async module(...args) {
        await this.ready
        return this.selection.slider(...args)
    }
    
    async import() {
        if (!window.slider) await import('../../../semantic/dist/components/slider')
    }

    getValue() {
        return this.module('get value', arguments);
    }

    getThumbValue(which) {
        return this.module('get thumbValue', which);
    }

    getNumLabels() {
        return this.module('get numLabels');
    }

    setValue(value) {
        this.module('set value', value);
    }

    setRangeValue(fromValue, toValue) {
        this.module('set rangeValue', fromValue, toValue);
    }
}
