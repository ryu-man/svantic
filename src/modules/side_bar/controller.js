import Controller from "../controller";

export default class SidebarController  extends Controller{
    setup() {
        this.selection.sidebar(this.settings);
    }
    /**
     *@description 	Attaches sidebar action to given selector. Default event if none specified is toggle
     */
    attachEvents(selector, event) {
        this.customBehavior('attach events', selector, event);
    }
    /**
     *@description 	Shows sidebar
     */
    show() {
        this.customBehavior('show');
    }
    /**
     *@description 	Hides sidebar
     */
    hide() {
        this.customBehavior('hide');
    }
    /**
     *@description 	Toggles visibility of sidebar
     */
    toggle() {
        this.customBehavior('toggle');
    }
    /**
     *@description 	Returns whether sidebar is visible
     */
    isVisible() {
        return this.customBehavior('is visible');
    }
    /**
     *@description 	Returns whether sidebar is hidden
     */
    isHidden() {
        return this.customBehavior('is hidden');
    }
    /**
     *@description 	Pushes page content to be visible alongside sidebar
     */
    pushPage() {
        this.customBehavior('push page');
    }
    /**
     *@description 	Returns direction of current sidebar
     */
    getDirection() {
        return this.customBehavior('get direction');
    }
    /**
     *@description 	Returns page content to original position
     */
    pullPage() {
        this.customBehavior('pull page');
    }
    /**
     *@description 	Adds stylesheet to page head to trigger sidebar animations
     */
    addBodyCSS() {
        this.customBehavior('add body CSS');
    }
    /**
     *@description 	Removes any inline stylesheets for sidebar animation
     */
    removeBodyCSS() {
        this.customBehavior('remove body CSS');
    }
    /**
     *@description 	Returns vendor prefixed transition end event
     */
    getTransitionEvent() {
        return this.customBehavior('get transition event');
    }
    customBehavior(behavior, ...args) {
        return this.selection.search(behavior, ...args);
    }
}
