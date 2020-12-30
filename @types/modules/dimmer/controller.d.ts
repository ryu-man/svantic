export default class DimmerController {
    jQuery: any;
    target: HTMLElement;
    settings: any;
    selection: any;
    constructor(target?: HTMLElement);
    init(): DimmerController;
    setSettings(settings: any): DimmerController;
    customBehavior(behavior: string, ...args: any[]): any;
}
