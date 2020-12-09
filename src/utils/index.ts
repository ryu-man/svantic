export function css(node: HTMLElement, style: {}) {
  const stylesheet = node.style
  Object.entries(style).forEach((elem) => {
    stylesheet[elem[0]] = elem[1]
  })
}

export function register<T extends keyof HTMLElementEventMap>(
  node: HTMLElement,
  events: EventMap<T, (this: HTMLElement, ev: HTMLElementEventMap[T]) => any>
): () => void {
  const eventKeys = Object.keys(events)
  eventKeys.forEach((key) => node.addEventListener(key, events[key]))
  return () => {
    eventKeys.forEach((key) => node.removeEventListener(key, events[key]))
  }
}

export function classNames(names: string[]): string {
  return names.filter((o) => o).join(' ')
  return names.reduce((a, b) => (b && `${a} ${b}`) || a, '')
}
