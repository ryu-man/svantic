
declare type LoaderType = "dropdown"

const loader : (type:LoaderType) => Promise<void>

export default loader

export const dropdownLoader: () => Promise<void>

export const modalLoader: () => Promise<void>

export const progressLoader: () => Promise<void>

export const toastLoader: () => Promise<void>

export const tabLoader: () => Promise<void>

export const sliderLoader: () => Promise<void>

export const sidebarLoader: () => Promise<void>

export const searchLoader: () => Promise<void>

export const ratingLoader: () => Promise<void>

export const checkboxLoader: () => Promise<void>

export const calendarLoader: () => Promise<void>

export const accordionLoader: () => Promise<void>

export const transitionLoader: () => Promise<void>

export const dimmerLoader: () => Promise<void>

export const embedLoader: () => Promise<void>

export const popupLoader: () => Promise<void>

export const stickyLoader: () => Promise<void>
