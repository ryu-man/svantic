import type { Unsubscriber } from 'svelte/store'
import { Component } from '../component'
import { DropdownSettings } from './dropdown'
declare interface Module<S> extends Component {
  settings?: S
  // onMount?: (controller: C) => void
}
export { Module }

type ModuleStore<K> = {
  set: (this: void, value: HTMLElement) => void
  subscribe: <T extends HTMLElement>(
    this: void,
    run: Subscriber<T>,
    invalidate?: Invalidator<T>
  ) => Unsubscriber
  selection: JQuery.Selector
  module: (...args) => any
  setSettings: (settings: K) => void
}

type ModuleSettings = {
  dropdown: DropdownSettings
}
type ModulePick<T, K extends keyof T> = T[K]

type Type = 'dropdown' | (string & {})
export function module<T extends Type, U extends ModulePick<ModuleSettings, T>>(
  type: T,
  settings: U
): ModuleStore<U>

export const dropdown: (
  settings: DropdownSettings
) => ModuleStore<DropdownSettings>

export default Module
