import Controller from "../controller";

export default class TabularController extends Controller{
    setup() {
        this.selection.tab(this.settings);
    }

    /**    
    *@description 	Attaches tab action to given selector. Default event if none specified is toggle    
    */
    attachEvents(selector, event) {
        return ''
    }

    /**    
    *@description 	Changes tab to path    
    */
    changeTab(path) {
        return ''
    }

    /**    
    *@description 	Sets current path to state    
    */
    setState(path) {
        return ''
    }

    /**    
    *@description 	Returns current path    
    */
    getPath() {
        return ''
    }

    /**    
    *@description 	Returns whether tab exists    
    */
    isTab() {
        return ''
    }

    /**    
    *@description 	Returns cached HTML for path    
    */
    cacheRead(path) {
        return ''
    }

    /**    
    *@description 	Sets cached HTML for path    
    */
    cacheAdd(path, html) {
        return ''
    }

    /**    
    *@description 	Removes cached HTML for path    
    */
    cacheRemove(path) {
        return ''
    }

}
