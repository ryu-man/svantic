import { Writable } from 'svelte/store'

export type Controllable<T> = Omit<Writable<T>, 'update'> & {
  value: T
}
export const controllable: <T>(
  callback?: (controller: T) => void
) => Controllable<T>

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
  embed,
  Module
} from './module'
