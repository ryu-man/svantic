import { writable } from 'svelte/store'
import { transitionLoader, dropdownLoader, modalLoader, progressLoader, dimmerLoader, toastLoader, tabLoader, sliderLoader, sidebarLoader, searchLoader, ratingLoader, checkboxLoader, calendarLoader, accordionLoader, embedLoader, popupLoader, load } from './loaders'


const getFunction = (type, selection) => (...args) => selection[type]?.(...args)

export function module(type, settings = {}, ...args) {
    const { set, subscribe } = writable()

    let _selection
    let _module
    let _settings = settings
    let _resolve = (_) => { }
    let _ready = new Promise((resolve) => {
        _resolve = resolve
    })

    const init = new Promise(async resolve => {
        if (!window?.['jQuery']?.[type]) {
            await load(...args)
        }
        resolve()
    })


    return {
        async set(value) {
            await init
            _module = getFunction(type, _selection = jQuery(value))
            _module(_settings)
            _resolve()

            set(value)
        },
        subscribe: subscribe,

        get ready() {
            return _ready
        },

        get selection() {
            return _selection
        }
        ,
        module(...args) {
            if (args.length) {
                _module(...args)
            }
            return _module
        },
        async setSettings(settings) {
            if (!_module) return
            _module(_settings = settings)
        },
        settings(...args) {
            if (args.length) {
                _module?.(_settings = args[0])
            }
            return _settings
        }
    }
}

export const dropdown = (settings) => module('dropdown', settings, transitionLoader, dropdownLoader)

export const modal = (settings) => module('modal', settings, transitionLoader, dimmerLoader, modalLoader)

export const progress = (settings) => module('progress', settings, progressLoader)

export const toast = (settings) => module('toast', settings, toastLoader)

export const tab = (settings) => module('tab', settings, tabLoader)

export const slider = (settings) => module('slider', settings, sliderLoader)

export const sidebar = (settings) => module('sidebar', settings, sidebarLoader)

export const search = (settings) => module('search', settings, searchLoader)

export const rating = (settings) => module('rating', settings, ratingLoader)

export const checkbox = (settings) => module('checkbox', settings, checkboxLoader)

export const calendar = (settings) => module('calendar', settings, dimmerLoader, popupLoader, transitionLoader, dropdownLoader, calendarLoader)

export const accordion = (settings) => module('accordion', settings, accordionLoader)

export const embed = (settings) => module('embed', settings, popupLoader, embedLoader)

export const popup = (settings) => module('popup', settings, transitionLoader, popupLoader)
