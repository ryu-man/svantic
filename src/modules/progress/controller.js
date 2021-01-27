import Controller from "../controller";

export default class ProgressController extends Controller {
    setup() {
        this.selection.progress(this.settings);
    }
    /**
     *@description 	Sets current percent of progress to value. If using a total will convert from percent to estimated value. percent can be array of percent like [20,30,50], comma-separated string like'20,30,50' for `.ui.multiple.progress`.
     */
    setPercent(percent) {
        this.customBehavior('set percent', percent);
    }
    /**
     *@description 	Sets progress to specified value. Will automatically calculate percent from total. value can be array of values like [5,3,10], comma-separated string like'5,3,10' for `.ui.multiple.progress`.
     */
    setProgress(value) {
        this.customBehavior('set progress', value);
    }
    /**
     *@description 	Increments progress by increment value, if not passed a value will use random amount specified in settings
     */
    increment(incrementValue) {
        this.customBehavior('increment', incrementValue);
    }
    /**
     *@description 	Decrements progress by decrement value, if not passed a value will use random amount specified in settings
     */
    decrement(decrementValue) {
        this.customBehavior('decrement', decrementValue);
    }
    /**
     *@description 	Immediately updates progress to value, ignoring progress animation interval delays. value can be array of values like [5,3,10], comma-separated string like'5,3,10' for `.ui.multiple.progress`.
     */
    updateProgress(value) {
        this.customBehavior('update progress', value);
    }
    /**
     *@description 	Finishes progress and sets loaded to 100%. Set keepState to true (default false) to stop the active animation only without setting the progress to 100%.
     */
    complete(keepState) {
        this.customBehavior('complete', keepState);
    }
    /**
     *@description 	Resets progress to zero
     */
    reset() {
        this.customBehavior('reset');
    }
    /**
     *@description 	Set total to a new value
     */
    setTotal(total) {
        this.customBehavior('set total', total);
    }
    /**
     *@description 	Replaces templated string with value, total, percent left and percent.
     */
    getText(text) {
        return this.customBehavior('get text', text);
    }
    /**
     *@description 	Returns normalized value inside acceptable range specified by total.
     */
    getNormalizedValue(value) {
        return this.customBehavior('get normalized', value);
    }
    /**
     *@description 	Returns percent as last specified
     */
    getPercent() {
        return this.customBehavior('get percent');
    }
    /**
     *@description 	Returns current progress value
     */
    getValue() {
        return this.customBehavior('get value');
    }
    /**
     *@description 	Returns total
     */
    getTotal() {
        return this.customBehavior('get total');
    }
    /**
     *@description 	Returns whether progress is completed
     */
    isComplete() {
        return this.customBehavior('is complete');
    }
    /**
     *@description 	Returns whether progress was a success
     */
    isSuccess() {
        return this.customBehavior('is success');
    }
    /**
     *@description 	Returns whether progress is in warning state
     */
    isWarning() {
        return this.customBehavior('is warning');
    }
    /**
     *@description 	Returns whether progress is in error state
     */
    isError() {
        return this.customBehavior('is error');
    }
    /**
     *@description 	Returns whether progress is in active state
     */
    isActive() {
        return this.customBehavior('is active');
    }
    /**
     *@description 	Sets progress to active state
     */
    setActive() {
        this.customBehavior('set active');
    }
    /**
     *@description 	Sets progress to warning state. Set keepState to true (default false) to keep the progressbar state and the current percentage without raising it up to 100%
     */
    setWarning(text, keepState) {
        this.customBehavior('set warning', text, keepState);
    }
    /**
     *@description 	Sets progress to success state. Set keepState to true (default false) to keep the progressbar state and the current percentage without raising it up to 100%
     */
    setSuccess(text, keepState) {
        this.customBehavior('set success', text, keepState);
    }
    /**
     *@description 	Sets progress to error state. Set keepState to true (default false) to keep the progressbar state and the current percentage without raising it up to 100%
     */
    setError(text, keepState) {
        this.customBehavior('set error', text, keepState);
    }
    /**
     *@description 	Changes progress animation speed
     */
    setDuration(value) {
        this.customBehavior('set duration', value);
    }
    /**
     *@description 	Sets progress exterior label to text
     */
    setLabel(text) {
        this.customBehavior('set label', text);
    }
    /**
     *@description 	Sets progress bar label to text
     */
    setBarLabel(text) {
        this.customBehavior('set bar', text);
    }
    /**
     *@description 	Removes progress to active state
     */
    removeActive() {
        this.customBehavior('remove active');
    }
    /**
     *@description 	Removes progress to warning state
     */
    removeWarning() {
        this.customBehavior('remove warning');
    }
    /**
     *@description 	Removes progress to success state
     */
    removeSuccess() {
        this.customBehavior('remove success');
    }
    /**
     *@description 	Removes progress to error state
     */
    removeError() {
        this.customBehavior('remove error');
    }
    customBehavior(behavior, ...args) {
        return this.selection.dropdown(behavior, ...args);
    }
}
