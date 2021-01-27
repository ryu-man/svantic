import Controller from "../controller";

export default class AccordionController extends Controller {

    setup() {
        this.selection.accordion(this.settings);
    }

    /**
   *@description 	Refreshes all cached selectors and data
   */
    refresh() {
        return this.customBehavior('refresh')
    }

    /**
     *@description 	Opens accordion content at index
     */
    open(index) {
        return this.customBehavior('open', index)
    }

    /**
     *@description 	Closes accordion content that are not active
     */
    closeOthers() {
        return this.customBehavior('close others')
    }

    /**
     *@description 	Closes accordion content at index
     */
    close(index) {
        return this.customBehavior('close', index)
    }

    /**
     *@description 	Toggles accordion content at index
     */
    toggle(index) {
        return this.customBehavior('toggle', index)

    }
    
}
