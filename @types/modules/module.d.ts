declare interface Module<C = any> {
  onMount?: (controller: C) => void
}
export { Module }
