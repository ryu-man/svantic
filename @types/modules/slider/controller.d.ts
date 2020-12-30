import type { SliderSettings } from './settings';

export default class SliderController {
    jQuery: any;
    target: HTMLElement;
    settings: SliderSettings;
    selection: any;
    constructor(target: HTMLElement);
    init(): SliderController;
    setSettings(settings: SliderSettings): SliderController;
    /**
     *@description Get the current selected value
     */
    getValue(): number;
    /**
     *@description Get the selected value of one of the range thumbs. Provide either first or second as a string parameter
     */
    getThumbValue(which: any): number;
    /**
     *@description Get the number of rendered label ticks
     */
    getNumLabels(): number;
    /**
     *@description Set the current slider value
     */
    setValue(value: any): void;
    /**
     *@description Set the current range slider values
     */
    setRangeValue(fromValue: any, toValue: any): void;
    customBehavior(behavior: any, ...args: any[]): any;
}
