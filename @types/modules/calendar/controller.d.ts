import type { CalendarSettings } from './settings';
export default class CalendarController {
    jQuery: any;
    target: HTMLElement;
    settings: CalendarSettings;
    selection: any;
    constructor(target?: HTMLElement);
    init(): CalendarController;
    setSettings(settings: CalendarSettings): CalendarController;
    customBehavior(behavior: string, ...args: any[]): any;
}
