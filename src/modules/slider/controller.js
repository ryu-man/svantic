import Controller from "../controller";

export default class SliderController extends Controller{
    setup() {
        this.selection.slider(this.settings);
    }
    /**
     *@description Get the current selected value
     */
    getValue() {
        return this.customBehavior('get value', arguments);
    }
    /**
     *@description Get the selected value of one of the range thumbs. Provide either first or second as a string parameter
     */
    getThumbValue(which) {
        return this.customBehavior('get thumbValue', which);
    }
    /**
     *@description Get the number of rendered label ticks
     */
    getNumLabels() {
        return this.customBehavior('get numLabels');
    }
    /**
     *@description Set the current slider value
     */
    setValue(value) {
        this.customBehavior('set value', value);
    }
    /**
     *@description Set the current range slider values
     */
    setRangeValue(fromValue, toValue) {
        this.customBehavior('set rangeValue', fromValue, toValue);
    }
    customBehavior(behavior, ...args) {
        return this.selection.search(behavior, ...args);
    }
}
