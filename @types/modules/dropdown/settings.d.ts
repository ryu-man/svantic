import type { TransitionType } from '../transition';
declare type Value = {
    name?: any;
    value?: string;
    selected?: boolean;
};
export interface DropdownSettings {
    /** When specified allows you to initialize dropdown with specific values. See usage guide for details. */
    values?: Value[];
    /** Event used to trigger dropdown (Hover, Click, Custom Event) */
    on?: boolean;
    /** Whether the dropdown value can be cleared by the user after being selected. */
    clearable?: boolean;
    /** Whether values with non matching cases should be treated as identical when adding them to a dropdown. */
    ignoreCase?: boolean;
    /** Whether values with non matching cases should be treated as identical when filtering the items. */
    ignoreSearchCase?: boolean;
    /** When set to true will fire onChange even when the value a user select matches the currently selected value. */
    allowReselection?: boolean;
    /** Whether search selection should allow users to add their own selections, works for single or multiselect. */
    allowAdditions?: boolean;
    /** If disabled user additions will appear in the dropdown's menu using a specially formatted selection item formatted by templates.addition. */
    hideAdditions?: boolean;
    /**
     * Sets a default action to occur. (See usage guide) .
     * activate (default) Updates dropdown text with selected value, sets element state to active, updates any hidden fields if available.
     * select activates menu and updates input fields, but does not change current text.
     * combo changes text of previous sibling element.
     * nothing no action occurs.
     * hide Dropdown menu is hidden.
     * function(text, value, element){}  custom function is executed with values specified in callback
     **/
    action?: 'activate' | 'select' | 'combo' | 'nothing' | 'hide' | ((text: string, value: any, element: HTMLElement) => void);
    /** The minimum characters for a search to begin showing results */
    minCharacters?: number;
    /** When using search selection specifies how to match values.
     * both Matches against text and value
     * value matches against value only
     * text matches against text only */
    match?: 'both' | 'value' | 'text';
    /** Whether dropdown should select new option when using keyboard shortcuts. Setting to false will require enter or left click to confirm a choice. */
    selectOnKeydown?: boolean;
    /** Whether search selection will force currently selected choice when element is blurred. */
    forceSelection?: boolean;
    /** Whether menu items with sub-menus (categories) should be selectable */
    allowCategorySelection?: boolean;
    /**
     * auto Convert option with "" (blank string) value to placeholder text
     * value Sets string value to placeholder text, leaves "" value
     * false Leaves "" value as a selectable option
     **/
    placeholder?: 'auto' | 'value' | false;
    /** When activated, searches will also match results for base diacritic letters. For example when searching for 'a', it will also match 'á' or 'â' or 'å' and so on... It will also ignore diacritics for the searchterm, so if searching for 'ó', it will match 'ó', but also 'o', 'ô' or 'õ' and so on... */
    ignoreDiacritics?: boolean;
    /** Can be set to an object to specify API settings for retrieving remote selection menu content from an API endpoint */
    apiSettings?: boolean;
    /** List mapping dropdown content to JSON Property when using API */
    fields?: {};
    /** Whether results returned from API should be filtered by query before being displayed */
    filterRemoteData?: boolean;
    /** When enabled, will automatically store selected name/value pairs in sessionStorage to preserve user selection on page refresh. Disabling will clear remote dropdown values on refresh. */
    saveRemoteData?: boolean;
    /** Whether multiselect should use labels. Must be set to true when allowAdditions is true */
    useLabels?: boolean;
    /** When set to a number, sets the maximum number of selections */
    maxSelections?: boolean;
    /** Maximum glyph width, used to calculate search size. This is usually size of a "W" in your font in em */
    glyphWidth?: number;
    /** Allows customization of multi-select labels */
    label?: {
        tansition?: TransitionType;
        duration?: number;
        variation?: boolean;
    };
    /** When set to auto determines direction based on whether dropdown can fit on screen. Set to upward or downward to always force a direction. */
    direction?: 'auto' | 'upward' | 'downward';
    /** Whether dropdown should try to keep itself on screen by checking whether menus display position in its context (Default context is page). */
    keepOnScreen?: boolean;
    /** Element context to use when checking whether can show when keepOnScreen: true */
    context?: HTMLElement | Window | string;
    /** Specifying to "true" will use a fuzzy full text search, setting to "exact" will force the exact search to be matched somewhere in the string, setting to "false" will only match start of string. */
    fullTextSearch?: boolean;
    /**
     * How to handle dividers in the dropdown while searching. Dividers are defined as all siblings of items that match the divider selector
     * false Dividers are not hidden
     * true All dividers are automatically hidden
     * empty All dividers not followed by a visible item are hidden (divider siblings are treated as a group)
     **/
    hideDividers?: boolean | 'empty';
    /** Whether HTML included in dropdown values should be preserved. (Allows icons to show up in selected value) */
    preserveHTML?: boolean;
    /**
     * Whether to sort values when creating a dropdown automatically from a select element.
     * true Sort by name [A, B, C, a, b, c]
     * natural Sort by lowercase name [A, a, B, b, C, c]
     * function(a, b){} custom sort function is executed
     */
    sortSelect?: boolean;
    /** Whether to show dropdown menu automatically on element focus. */
    showOnFocus?: boolean;
    /** Whether to allow the element to be navigable by keyboard, by automatically creating a tabindex */
    allowTab?: boolean;
    /** Named transition to use when animating menu in and out. Defaults to slide down or slide up depending on dropdown direction. Fade and slide down are available without including ui transitions */
    transition?: TransitionType;
    /** Duration of animation events */
    duration?: number;
    /** The keycode used to represent keyboard shortcuts. To avoid issues with some foreign languages, you can pass false for comma delimiter's value */
    keys?: {
        backspace?: number | false;
        delimiter?: number | false;
        deleteKey?: number | false;
        enter?: number | false;
        escape?: number | false;
        pageUp?: number | false;
        pageDown?: number | false;
        leftArrow?: number | false;
        upArrow?: number | false;
        rightArrow?: number | false;
        downArrow?: number | false;
    };
    /** Time in milliseconds to debounce show or hide behavior when on: hover is used, or when touch is used. */
    delay?: {
        hide?: number;
        show?: number;
        search?: number;
        touch?: number;
    };
    /** Is called after a dropdown value changes. Receives the name and value of selection and the active menu element */
    onChange?: (value: any, text: any, $choice: any) => void;
    /** Is called after a dropdown selection is added using a multiple select dropdown, only receives the added value */
    onAdd?: (addedValue: any, addedText: any, $addedChoice: any) => void;
    /** Is called after a dropdown selection is removed using a multiple select dropdown, only receives the removed value */
    onRemove?: (removedValue: any, removedText: any, $removedChoice: any) => void;
    /** Allows you to modify a label before it is added. Expects the jQ DOM element for a label to be returned. */
    onLabelCreate?: (value: any, text: any) => any;
    /** Called when a label is remove, return false; will prevent the label from being removed. */
    onLabelRemove?: (value: any) => boolean;
    /** Is called after a label is selected by a user */
    onLabelSelect?: ($selectedLabels: any) => void;
    /** Is called after a dropdown is searched with no matching values */
    onNoResults?: (searchValue: any) => void;
    /** Is called before a dropdown is shown. If false is returned, dropdown will not be shown. */
    onShow?: () => boolean;
    /** Is called before a dropdown is hidden. If false is returned, dropdown will not be hidden. */
    onHide?: () => boolean;
}
export {};
