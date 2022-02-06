import { writable } from 'svelte/store'

export const controllable = (callback = (_) => { }) => {
  let value
  const { set, subscribe } = writable(callback)

  return {
    set(val) {
      let value = val
      val?.ready?.()?.then?.(() => {
        callback?.(val)
      })
      set(val)
    },
    subscribe,
    get value() {
      return value
    }

  }
}

export {
  accordionLoader,
  calendarLoader,
  checkboxLoader,
  dimmerLoader,
  dropdownLoader,
  embedLoader,
  modalLoader,
  popupLoader,
  progressLoader,
  ratingLoader,
  searchLoader,
  sidebarLoader,
  sliderLoader,
  stickyLoader,
  tabLoader,
  toastLoader,
  transitionLoader,
  load
} from './loaders'

export {
  accordion,
  calendar,
  checkbox,
  dropdown,
  modal,
  progress,
  rating,
  search,
  sidebar,
  slider,
  tab,
  toast,
  embed
} from './module'


