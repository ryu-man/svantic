declare interface Module<C, S> {
  settings?: S
  onMount?: (controller: C) => void
}
export { Module }
