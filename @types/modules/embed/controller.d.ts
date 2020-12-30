import type { EmbedSettings } from './settings';
export default class EmbedController {
    jQuery: any;
    target: HTMLElement;
    settings: EmbedSettings;
    selection: any;
    constructor(target?: HTMLElement);
    init(): this;
    setSettings(settings: EmbedSettings): this;
    customBehavior(behavior: string, ...args: any[]): any;
}
