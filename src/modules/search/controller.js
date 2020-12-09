export default class SearchController {
    constructor(target) {
        this.jQuery = window['$'] || window['jQuery'];
        if (!this.jQuery)
            throw Error('jQuery not found, make sure you include jquery in the head tag');
        this.target = target;
        this.settings = {};
        this.selection = this.jQuery(target);
        this.selection.search(this.settings);
    }
    init() {
        this.selection.search(this.settings);
        return this;
    }
    setSettings(settings) {
        this.settings = settings;
        this.selection.search(this.settings);
        return this;
    }
    customBehavior(behavior, ...args) {
        return this.selection.search(behavior, ...args);
    }
    /**
     *@description 	Search for value currently set in search input
     */
    query(callback) {
        this.customBehavior('query ', callback);
    }
    /**
     *@description 	Displays message in search results with text, using template matching type
     */
    displayMessage(text, type) {
        this.customBehavior('display message', text, type);
    }
    /**
     *@description 	Search local object for specified query and display results
     */
    searchLocal(query) {
        return this.customBehavior('search local', query);
    }
    /**
     *@description 	Whether has minimum characters
     */
    hasMinimumCharacters() {
        return this.customBehavior('has minimum');
    }
    /**
     *@description 	Search remote endpoint for specified query and display results
     */
    searchRemote(query, callback) {
        return this.customBehavior('search remote', query, callback);
    }
    /**
     *@description 	Search object for specified query and return results
     */
    searchObject(query, object, searchFields) {
        return this.customBehavior('search object', query, object, searchFields);
    }
    /**
     *@description 	Cancels current remote search request
     */
    cancelQuery() {
        this.customBehavior('cancel query');
    }
    /**
     *@description 	Whether search is currently focused
     */
    isFocused() {
        return this.customBehavior('is focused');
    }
    /**
     *@description 	Whether search results are visible
     */
    isVisible() {
        return this.customBehavior('is visible');
    }
    /**
     *@description 	Whether search results are empty
     */
    isEmpty() {
        return this.customBehavior('is empty');
    }
    /**
     *@description 	Returns current search value
     */
    getValue() {
        return this.customBehavior('get value');
    }
    /**
     *@description 	Returns JSON object matching searched title or id (see above)
     */
    getResult(value) {
        return this.customBehavior('get result', value);
    }
    /**
     *@description 	Sets search input to value
     */
    setValue(value) {
        this.customBehavior('set value', value);
    }
    /**
     *@description 	Reads cached results for query
     */
    readCache(query) {
        return this.customBehavior('read cache', query);
    }
    /**
     *@description 	Clears value from cache, if no parameter passed clears all cache
     */
    clearCache(query) {
        this.customBehavior('clear cache', query);
    }
    /**
     *@description 	Writes cached results for query
     */
    writeCache(query) {
        this.customBehavior('write cache', query);
    }
    /**
     *@description 	Adds HTML to results and displays
     */
    addResults(html) {
        this.customBehavior('add results', html);
    }
    /**
     *@description 	Shows results container
     */
    showResults(callback) {
        this.customBehavior('show results', callback);
    }
    /**
     *@description 	Hides results container
     */
    hideResults(callback) {
        this.customBehavior('hide results', callback);
    }
    /**
     *@description 	Generates results using parser specified by settings.template
     */
    generateResults(response) {
        this.customBehavior('generate results', response);
    }
    /**
     *@description 	Removes all events
     */
    destroy() {
        this.customBehavior('destroy');
    }
}
