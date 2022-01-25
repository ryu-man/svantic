import { writable } from 'svelte/store'
import { transitionLoader, dropdownLoader, modalLoader, progressLoader, dimmerLoader, toastLoader, tabLoader, sliderLoader, sidebarLoader, searchLoader, ratingLoader, checkboxLoader, calendarLoader, accordionLoader, embedLoader, popupLoader } from './loaders'


const getModule = (type, selection) => (...args) => selection[type]?.(...args)

export function module(type, settings = {}, ...args) {
    const { set, subscribe } = writable()

    let selection
    let module
    let _settings = settings

    return {
        get ready() {
            return new Promise(async resolve => {
                if (!window?.['jQuery']?.[type]) {
                    await Promise.all(args.map(m => m()))
                }
                resolve()
            })
        },

        async set(value) {
            await this.ready
            module = getModule(type, selection = jQuery(value))
            module(_settings)
            set(value)
        },
        subscribe: subscribe,
        selection: () => selection,
        module(...args) {
            if (args.length) {
                module(...args)
            }
            return module
        },
        async setSettings(settings) {
            if (!module) return
            module(_settings = settings)
        },
        settings(...args) {
            if (args.length) {
                module?.(_settings = args[0])
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

export const calendar = (settings) => module('calendar', settings, dimmerLoader, dropdownLoader, calendarLoader)

export const accordion = (settings) => module('accordion', settings, accordionLoader)

export const embed = (settings) => module('embed', settings, popupLoader, embedLoader)

export const popup = (settings) => module('popup', settings, transitionLoader, popupLoader)
