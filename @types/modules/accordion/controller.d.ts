import type { AccordionSettings } from "./settings";
export default class AccordionController {
    jQuery: any;
    target: HTMLElement;
    settings: AccordionSettings;
    selection: any;
    constructor(target?: HTMLElement);
    init(): AccordionController;
    setSettings(settings: AccordionSettings): AccordionController;
    customBehavior(behavior: string, ...args: any[]): any;
}
