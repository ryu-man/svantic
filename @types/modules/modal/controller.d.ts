import type { ModalSettings } from './settings';
declare type Beahvior = 'show' | 'hide' | 'toggle' | 'refresh' | 'show dimmer' | 'hide dimmer' | 'hide others' | 'hide all' | 'cache sizes' | 'can fit' | 'is active' | 'set active' | 'attach events';
export default class ModalController {
    jQuery: any;
    target: HTMLElement;
    settings: ModalSettings;
    selection: any;
    constructor(target: HTMLElement);
    init(): ModalController;
    setSettings(settings: ModalSettings): ModalController;
    show(): void;
    hide(): void;
    toggle(): void;
    refresh(): void;
    showDimmer(): void;
    hideDimmer(): void;
    hideOthers(): void;
    hideAll(): void;
    cacheSizes(): void;
    canFit(): boolean;
    isActive(): boolean;
    setActive(): void;
    customBehavior(behavior: Beahvior, ...args: any[]): any;
}
export {};
