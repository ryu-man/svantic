const loadJQ = async () => {
    let jq = window['jQuery'] ?? window['$']
    if (jq) return jq

    jq = (await import('jquery')).default
    window['jQuery'] = jq
    window['$'] = jq
    return jq
}

const loader = async (type) => {
    await loadJQ()

    return import(`../../../../semantic/dist/components/${type}.min`)
}
export default loader

export const load = (...args) => Promise.all(args.map(fn => fn()))

export const dropdownLoader = () => loader('dropdown')

export const modalLoader = () => loader('modal')

export const progressLoader = () => loader('progress')

export const toastLoader = () => loader('toast')

export const tabLoader = () => loader('tab')

export const sliderLoader = () => loader('slider')

export const sidebarLoader = () => loader('sidebar')

export const searchLoader = () => loader('search')

export const ratingLoader = () => loader('rating')

export const checkboxLoader = () => loader('checkbox')

export const calendarLoader = () => loader('calendar')

export const accordionLoader = () => loader('accordion')

export const transitionLoader = () => loader('transition')

export const dimmerLoader = () => loader('dimmer')

export const embedLoader = () => loader('embed')

export const popupLoader = () => loader('popup')

export const stickyLoader = () => loader('sticky')
