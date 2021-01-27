import Controller from "../controller";

export default class EmbedController extends Controller{
    setup() {
        this.selection.embed(this.settings);
    }
    /**
     *@description 	Changes iframe to a new content source
     */
    change(source, id, url) {
        return this.customBehavior('change', source, id, url)
    }

    /**
     *@description 	Removes embed and shows placeholder content if available
     */
    reset() {
        return this.customBehavior('reset')
    }

    /**
     *@description 	Shows embed content
     */
    show() {
        return this.customBehavior('show')
    }

    /**
     *@description 	Hides embed content and shows placeholder content
     */
    hide() {
        return this.customBehavior('hide')
    }

    /**
     *@description 	Returns current content id
     */
    getId() {
        return this.customBehavior('get id')
    }

    /**
     *@description 	Returns placeholder image url
     */
    getPlaceholder() {
        return this.customBehavior('get placeholder')
    }

    /**
     *@description 	Returns source name
     */
    getSources() {
        return this.customBehavior('get sources')
    }

    /**
     *@description 	Returns source type
     */
    getType() {
        return this.customBehavior('get type')
    }

    /**
     *@description 	Returns URL with all parameters added
     */
    getUrl() {
        return this.customBehavior('get url')
    }

    /**
     *@description 	Returns whether embed content has placeholder
     */
    hasPlaceholder() {
        return this.customBehavior('has placeholder')
    }

    /**
     *@description 	Destroys instance and removes all events
     */
    destroy() {
        return this.customBehavior('destroy')
    }
}
