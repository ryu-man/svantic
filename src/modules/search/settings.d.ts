import type { TransitionType } from '../../transition';
export interface SearchSettings {
    /** Minimum characters to query for results */
    minCharacters?: number;
    /** Whether search should show results on focus (must also match min character length) */
    searchOnFocus?: boolean;
    /** Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions */
    transition?: TransitionType;
    /** Duration of animation events */
    duration?: number;
    /** Maximum results to display when using local and simple search, maximum category count for category search */
    maxResults?: number;
    /** Caches results locally to avoid requerying server */
    cache?: boolean;
    /** Specify a Javascript object which will be searched locally */
    source?: Array<any>;
    /** Whether the search should automatically select the first search result after searching */
    selectFirstResult?: boolean;
    /** Whether a "no results" message should be shown if no results are found. (These messages can be modified using the template object specified below) */
    showNoResults?: boolean;
    /** Specifying to "true" will use a fuzzy full text search, setting to "exact" will force the exact search to be matched somewhere in the string, setting to false will only match to start of string. (This setting was previously called searchFullText.) */
    fullTextSearch?: 'exact' | true | false;
    /** List mapping display content to JSON property, either with API or source. */
    fields?: {};
    /** Specify object properties inside local source object which will be searched */
    searchFields?: string[];
    /** Delay before hiding results after search blur */
    hideDelay?: number;
    /** Delay before querying results on inputchange */
    searchDelay?: number;
    /** Easing equation when using fallback Javascript animation */
    easing?: any;
    /** When activated, searches will also match results for base diacritic letters. For example when searching for 'a', it will also match 'á' or 'â' or 'å' and so on... It will also ignore diacritics for the searchterm, so if searching for 'ó', it will match 'ó', but also 'o', 'ô' or 'õ' and so on */
    ignoreDiacritics?: boolean;
    /** Callback on element selection by user. The first parameter includes the filtered response results for that element. The function should return false to prevent default action (closing search results and selecting value). */
    onSelect?: (result: any, response: any) => void;
    /** Callback after processing element template to add HTML to results. Function should return false to prevent default actions. */
    onResultsAdd?: (html: HTMLElement) => any;
    /** Callback on search query */
    onSearchQuery?: (query: string) => void;
    /** Callback on server response */
    onResults?: (response: any) => void;
    /** Callback when results are opened*/
    onResultsOpen?: () => void;
    /** Callback when results are closed*/
    onResultsClose?: () => void;
}
