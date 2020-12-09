export type EventMap<T extends keyof HTMLElementEventMap, R> = {
  [key in T]?: R
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
