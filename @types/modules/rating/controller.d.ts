import type { RatingSettings } from './settings';
export default class ProgressController {
    jQuery: any;
    target: HTMLElement;
    settings: RatingSettings;
    selection: any;
    constructor(target: HTMLElement);
    init(): ProgressController;
    setSettings(settings: RatingSettings): ProgressController;
    customBehavior(behavior: string, ...args: any[]): any;
}
