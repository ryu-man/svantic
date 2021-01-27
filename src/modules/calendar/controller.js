import Controller from '../controller'

export default class CalendarController extends Controller {
    setup() {
        this.selection.calendar(this.settings);
    }
    
    refresh() {
        this.customBehavior('refresh')
    }

    popup(args) {
        this.customBehavior('popup', args)
    }

    focus() {
        this.customBehavior('focus')
    }

    blur() {
        this.customBehavior('blur')
    }

    clear() {
        this.customBehavior('clear')
    }

    getDate() {
        this.customBehavior('get date')
    }

    setDate(date, updateInput, fireChange) {
        this.customBehavior('set date', date, updateInput, fireChange)
    }

    getMode() {
        return this.customBehavior('get mode')
    }

    setMode(mode) {
        this.customBehavior('set mode', mode)
    }

    getStartDate() {
        return this.customBehavior('get start date')
    }

    setStartDate(date) {
        this.customBehavior('set start date', date)
    }

    getEndDate() {
        return this.customBehavior('get end date')
    }

    setEndDate(date) {
        this.customBehavior('set end date', date)
    }

    getFocusDate() {
        return this.customBehavior('get focus date')
    }

    setFocusDate(date) {
        this.customBehavior('set focus date', date)
    }

    setMinDate(date) {
        this.customBehavior('set min date', date)
    }

    setMaxDate(date) {
        this.customBehavior('set max date', date)
    }
}
