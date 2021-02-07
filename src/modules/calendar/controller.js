import Controller from '../controller'

export default class CalendarController extends Controller {
    constructor(target, settings = {}) {
        super(target, settings)
    }
    moduleSync(...args) {
        return this.selection.calendar(...args)
    }
    async module(...args) {
        await this.ready
        return this.selection.calendar(...args)
    }
    async import() {
        if (!window.transition) await import('../../../semantic/dist/components/transition')

        if (!window.dropdown) await import('../../../semantic/dist/components/dropdown')

        if (!window.popup) await import('../../../semantic/dist/components/popup')

        if (!window.calendar) await import('../../../semantic/dist/components/calendar')

    }

    refresh() {
        this.module('refresh')
    }

    popup(...args) {
        this.module('popup', args)
    }

    focus() {
        this.module('focus')
    }

    blur() {
        this.module('blur')
    }

    clear() {
        this.module('clear')
    }

    getDate() {
        return this.module('get date')
    }

    setDate(date, updateInput, fireChange) {
        this.module('set date', date, updateInput, fireChange)
    }

    getMode() {
        return this.module('get mode')
    }

    setMode(mode) {
        this.module('set mode', mode)
    }

    getStartDate() {
        return this.module('get start date')
    }

    setStartDate(date) {
        this.module('set start date', date)
    }

    getEndDate() {
        return this.module('get end date')
    }

    setEndDate(date) {
        this.module('set end date', date)
    }

    getFocusDate() {
        return this.module('get focus date')
    }

    setFocusDate(date) {
        this.module('set focus date', date)
    }

    setMinDate(date) {
        this.module('set min date', date)
    }

    setMaxDate(date) {
        this.module('set max date', date)
    }
}
