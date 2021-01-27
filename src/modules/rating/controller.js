import Controller from "../controller";

export default class ProgressController extends Controller {
    setup() {
        this.selection.rating(this.settings);
    }
    /**    
    *@description 	Sets rating programmatically    
    */
    setRating(rating) {
        return this.customBehavior('set rating', rating)
    }

    /**    
    *@description 	Gets current rating    
    */
    getRating() {
        return this.customBehavior('get rating')
    }

    /**    
    *@description 	Disables interactive rating mode    
    */
    disable() {
        return this.customBehavior('disable')
    }

    /**    
    *@description 	Enables interactive rating mode    
    */
    enable() {
        return this.customBehavior('enable')
    }

    /**    
    *@description 	Clears current rating    
    */
    clearRating() {
        return this.customBehavior('close rating')
    }

}
