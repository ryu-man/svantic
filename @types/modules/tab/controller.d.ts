import type { TabularSettings } from './settings';

export default class TabularController {
    jQuery: any;
    target: HTMLElement;
    settings: TabularSettings;
    selection: any;
    constructor(target: HTMLElement);
    init(): TabularController;
    setSettings(settings: TabularSettings): TabularController;
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
