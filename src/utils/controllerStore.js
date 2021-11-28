import { writable } from 'svelte/store'

export const controllerStore = (callback = (_) => { }) => {
    const { set, subscribe } = writable(callback)

    return {
        set: (val) => {
            set(val)
            val?.ready?.()?.then?.(()=>{
                callback?.(val)
            })
        },
        subscribe
    }
}
