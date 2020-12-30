import type { SidebarSettings } from './settings';

export default class SidebarController {
    jQuery: any;
    target: HTMLElement;
    settings: SidebarSettings;
    selection: any;
    constructor(target: HTMLElement);
    init(): SidebarController;
    setSettings(settings: SidebarSettings): SidebarController;
    /**
     *@description 	Attaches sidebar action to given selector. Default event if none specified is toggle
     */
    attachEvents(selector: HTMLElement, event: any): void;
    /**
     *@description 	Shows sidebar
     */
    show(): void;
    /**
     *@description 	Hides sidebar
     */
    hide(): void;
    /**
     *@description 	Toggles visibility of sidebar
     */
    toggle(): void;
    /**
     *@description 	Returns whether sidebar is visible
     */
    isVisible(): boolean;
    /**
     *@description 	Returns whether sidebar is hidden
     */
    isHidden(): boolean;
    /**
     *@description 	Pushes page content to be visible alongside sidebar
     */
    pushPage(): void;
    /**
     *@description 	Returns direction of current sidebar
     */
    getDirection(): any;
    /**
     *@description 	Returns page content to original position
     */
    pullPage(): any;
    /**
     *@description 	Adds stylesheet to page head to trigger sidebar animations
     */
    addBodyCSS(): void;
    /**
     *@description 	Removes any inline stylesheets for sidebar animation
     */
    removeBodyCSS(): void;
    /**
     *@description 	Returns vendor prefixed transition end event
     */
    getTransitionEvent(): any;
    customBehavior(behavior: any, ...args: any[]): any;
}
