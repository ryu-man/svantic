
export const load = (...args) => Promise.all(args.map(fn => fn()))

// @ts-ignore
export const dropdownLoader = () => import('../../semantic/dist/components/dropdown')

// @ts-ignore
export const modalLoader = () => import('../../semantic/dist/components/modal')

// @ts-ignore
export const progressLoader = () => import('../../semantic/dist/components/progress')

// @ts-ignore
export const toastLoader = () => import('../../semantic/dist/components/toast')

// @ts-ignore
export const tabLoader = () => import('../../semantic/dist/components/tab')

// @ts-ignore
export const sliderLoader = () => import('../../semantic/dist/components/slider')

// @ts-ignore
export const sidebarLoader = () => import('../../semantic/dist/components/sidebar')

// @ts-ignore
export const searchLoader = () => import('../../semantic/dist/components/search')

// @ts-ignore
export const ratingLoader = () => import('../../semantic/dist/components/rating')

// @ts-ignore
export const checkboxLoader = () => import('../../semantic/dist/components/checkbox')

// @ts-ignore
export const calendarLoader = () => import('../../semantic/dist/components/calendar')

// @ts-ignore
export const accordionLoader = () => import('../../semantic/dist/components/accordion')

// @ts-ignore
export const transitionLoader = () => import('../../semantic/dist/components/transition')

// @ts-ignore
export const dimmerLoader = () => import('../../semantic/dist/components/dimmer')

// @ts-ignore
export const embedLoader = () => import('../../semantic/dist/components/embed')

// @ts-ignore
export const popupLoader = () => import('../../semantic/dist/components/popup')

// @ts-ignore
export const stickyLoader = () => import('../../semantic/dist/components/sticky')
