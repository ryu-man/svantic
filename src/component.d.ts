declare type Style = {
  [key in keyof CSSStyleDeclaration]?: string
}
export interface Component {
  class?: string
  style?: Style
  dimmable?: boolean
}

export type SvanticProps = {
  class?: string
  style?: Style
  dimmable?: boolean
}

export type SvanticEvents = {
  mount: CustomEvent<HTMLDivElement>
}

export type MountEvent<T extends HTMLElement> = {
  mount: CustomEvent<T>
}

export default Component
// declare type Event = HTMLElementEventMap[keyof HTMLElementEventMap]
