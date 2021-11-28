import { writable } from 'svelte/store'

const getExecutor = (type) => (jQuerySelection) => (...args) => jQuerySelection[type]?.(...args)

export function module(type, settings = {}) {
    const { set, subscribe } = writable()
    const executor = getExecutor(type)

    let jQuerySelection
    let module
    let moduleSettings = settings

    return {
        set: (value) => {
            module = executor(jQuerySelection = jQuery(value))
            console.log(moduleSettings)
            module(moduleSettings)
            set(value)
        },
        subscribe: subscribe,
        selection: () => jQuerySelection,
        module: (...args) => module(...args),
        setSettings: async (settings) => {
            if (!module) return
            module(moduleSettings = settings)
        }
    }
}

export const dropdown = (settings) => module('dropdown', settings)

export const modal = (settings) => module('modal', settings)

export const progress = (settings) => module('progress', settings)

export const toast = (settings) => module('toast', settings)

export const tab = (settings) => module('tab', settings)

export const slider = (settings) => module('slider', settings)

export const sidebar = (settings) => module('sidebar', settings)

export const search = (settings) => module('search', settings)

export const rating = (settings) => module('rating', settings)

export const checkbox = (settings) => module('checkbox', settings)

export const calendar = (settings) => module('calendar', settings)

export const accordion = (settings) => module('accordion', settings)

export const embed = (settings) => module('embed', settings)

export const popup = (settings) => module('popup', settings)
