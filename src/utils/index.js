export function css(node, style = {}) {
  const stylesheet = node.style
  Object.entries(style).forEach((elem) => {
    stylesheet[elem[0]] = elem[1]
  })
}
export function register(node, events) {
  const eventTypes = Object.keys(events)
  eventTypes.forEach((key) => node.addEventListener(key, events[key]))
  return () => {
    eventTypes.forEach((key) => node.removeEventListener(key, events[key]))
  }
}

export function classNames(...args) {
  return args
    .filter((o) => o)
    .map((o) => {
      if (typeof o === 'string') {
        return o.trim()
      }
      return Array.from(Object.entries(o))
        .map(([e1, e2]) => {
          if (e2) {
            if (typeof e2 === 'boolean') {
              return e1
            }
            return `${e2?.trim()} ${e1}`
          }
          return ''
        })
        .filter((o) => o)
        .join(' ')
        .trim()
    })
    .filter((o) => o)
    .join(' ')
    .trim()
}
