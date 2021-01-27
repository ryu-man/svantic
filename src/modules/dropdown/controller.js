import Controller from "../controller";

export default class DropdownController extends Controller {

    setup() {
        this.selection.dropdown(this.settings);
    }

    /**
     *@description 	Recreates dropdown menu from passed values. values should be an object with the following structure: { values: [ {value, text, name} ] }.
     */
    setupMenu(values) {
        this.customBehavior('setup menu', values);
    }
    /**
     *@description 	Changes dropdown to use new values
     */
    changeValues(values) {
        this.customBehavior('change values', values);
    }
    /**
     *@description 	Refreshes all cached selectors and data
     */
    refresh() {
        this.customBehavior('refresh ');
    }
    /**
     *@description 	Toggles current visibility of dropdown
     */
    toggle() {
        this.customBehavior('toggle');
    }
    /**
     *@description 	Shows dropdown. If a function is provided to callback, it's called after the dropdown-menu is shown. Set preventFocus to true if you don't want the dropdown field to focus after the menu is shown
     */
    show(callback, preventFocus) {
        this.customBehavior('show', callback, preventFocus);
    }
    /**
     *@description 	Hides dropdown. If a function is provided to callback, it's called after the dropdown-menu is hidden. Set preventBlur to true if you don't want the dropdown field to blur after the menu is hidden
     */
    hide(callback, preventBlur) {
        this.customBehavior('hide', callback, preventBlur);
    }
    /**
     *@description 	Clears dropdown of selection. Set preventChangeTrigger to true to omit the change event (default: false).
     */
    clear(preventChangeTrigger) {
        this.customBehavior('clear', preventChangeTrigger);
    }
    /**
     *@description 	Hides all other dropdowns that is not current dropdown
     */
    hideOthers() {
        this.customBehavior('hide others');
    }
    /**
     *@description 	Restores dropdown text and value to its value on page load. Set preventChangeTrigger to true to omit the change event (default: false).
     */
    restoreDefaults(preventChangeTrigger) {
        this.customBehavior('restore defaults', preventChangeTrigger);
    }
    /**
     *@description 	Restores dropdown text to its value on page load
     */
    restoreDefaultText() {
        this.customBehavior('restore default');
    }
    /**
     *@description 	Restores dropdown text to its prompt, placeholder text
     */
    restorePlaceholderText() {
        this.customBehavior('restore placeholder');
    }
    /**
     *@description 	Restores dropdown value to its value on page load
     */
    restoreDefaultValue() {
        this.customBehavior('restore default');
    }
    /**
     *@description 	Saves current text and value as new defaults (for use with restore)
     */
    saveDefaults() {
        this.customBehavior('save defaults');
    }
    /**
     *@description 	Sets value as selected or Adds a group of values as selected
     */
    setSelected(...args) {
        this.customBehavior('set selected', ...args);
    }
    /**
     *@description 	Remove value from selected
     */
    removeSelected(value) {
        this.customBehavior('remove selected', value);
    }
    /**
     *@description 	Adds a group of values as selected
     */
    /* setSelected(value1, value2):void {
        this.customBehavior('set selected', value1, value2)
      } */
    /**
     *@description 	Sets selected values to exactly specified values, removing current selection
     */
    setExactly(...args) {
        this.customBehavior('set exactly', ...args);
    }
    /**
     *@description 	Sets dropdown text to a value
     */
    setText(text) {
        this.customBehavior('set text', text);
    }
    /**
     *@description 	Sets dropdown input to value (does not update display state). text and $selected are used internally and can be ignored. Set preventChangeTrigger to true to omit the change event
     */
    setValue(value, text, $selected, preventChangeTrigger) {
        this.customBehavior('set value', value, text, $selected, preventChangeTrigger);
    }
    /**
     *@description 	Returns current dropdown text
     */
    getText() {
        return this.customBehavior('get text');
    }
    /**
     *@description 	Returns current dropdown input value
     */
    getValue() {
        return this.customBehavior('get value');
    }
    /**
     *@description 	Returns DOM element that matches a given input value
     */
    getItem(value) {
        return this.customBehavior('get item', value);
    }
    /**
     *@description 	Adds touch events to element
     */
    bindTouchEvents() {
        this.customBehavior('bind touch');
    }
    /**
     *@description 	Adds mouse events to element
     */
    bindMouseEvents() {
        this.customBehavior('bind mouse');
    }
    /**
     *@description 	Binds a click to document to determine if you click away from a dropdown
     */
    bindIntent() {
        this.customBehavior('bind intent');
    }
    /**
     *@description 	Unbinds document intent click
     */
    unbindIntent() {
        this.customBehavior('unbind intent');
    }
    /**
     *@description 	Returns whether event occurred inside dropdown
     */
    determineEventInModule() {
        this.customBehavior('determine eventInModule');
    }
    /**
     *@description 	Triggers preset item selection action based on settings passing text/value
     */
    determineSelectAction(text, value) {
        this.customBehavior('determine select', text, value);
    }
    /**
     *@description 	Sets dropdown to active state
     */
    setActive() {
        this.customBehavior('set active');
    }
    /**
     *@description 	Sets dropdown to visible state
     */
    setVisible() {
        this.customBehavior('set visible');
    }
    /**
     *@description 	Removes dropdown active state
     */
    removeActive() {
        this.customBehavior('remove active');
    }
    /**
     *@description 	Removes dropdown visible state
     */
    removeVisible() {
        this.customBehavior('remove visible');
    }
    /**
     *@description 	Returns whether dropdown is a selection dropdown
     */
    isSelection() {
        return this.customBehavior('is selection');
    }
    /**
     *@description 	Returns whether dropdown is animated
     */
    isAnimated() {
        return this.customBehavior('is animated');
    }
    /**
     *@description 	Returns whether dropdown is visible
     */
    isVisible() {
        return this.customBehavior('is visible');
    }
    /**
     *@description 	Returns whether dropdown is hidden
     */
    isHidden() {
        return this.customBehavior('is hidden');
    }
    /**
     *@description 	Returns dropdown value as set on page load
     */
    getDefaultText() {
        return this.customBehavior('get default');
    }
    /**
     *@description 	Returns placeholder text
     */
    getPlaceholderText() {
        return this.customBehavior('get placeholder');
    }

}
