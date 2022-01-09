export function css(node: HTMLElement, style: CSSStyleDeclaration): void

type Unregister = () => void
export function register(
  node: HTMLElement,
  events: Record<string, any>
): Unregister

type ClassName = string | Record<string, string | boolean>
export function classNames(...args: ClassName[]): string
