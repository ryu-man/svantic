import { writable } from 'svelte/store'

const getModule = (type, selection) => (...args) => selection[type]?.(...args)

export function module(type, settings = {}) {
    const { set, subscribe } = writable()

    let selection
    let module
    let _settings = settings

    return {
        set: (value) => {
            module = getModule(type, selection = jQuery(value))
            module(_settings)
            set(value)
        },
        subscribe: subscribe,
        selection: () => selection,
        module: (...args) => {
            if (args.length) {
                module(...args)
            }
            return module
        },
        setSettings: async (settings) => {
            if (!module) return
            module(_settings = settings)
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
