import type { Unsubscriber } from 'svelte/store'
import { Component, SvanticProps } from '../../component'
import { DropdownSettings } from '../dropdown'
import { ModalSettings } from '../modal'
import { ProgressSettings } from '../progress'
import { ToastSettings } from '../toast'
import { TabSettings } from '../tab'
import { SliderSettings } from '../slider'
import { SidebarSettings } from '../side_bar'
import { SearchSettings } from '../search'
import { RatingSettings } from '../rating'
import { CheckboxSettings } from '../checkbox'
import { CalendarSettings } from '../calendar'
import { AccordionSettings } from '../accordion'
import { EmbedSettings } from '../embed'
import { PopupSettings } from '../popup'

declare interface Module<S> extends SvanticProps {
  settings?: S
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
  /**
   * @deprecated
   */
  setSettings: (settings: K) => void
  settings: (settings: K) => void
  settings: () => K
}

type ModuleSettings = {
  dropdown: DropdownSettings
}
type ModulePick<T, K extends keyof T> = T[K]

type Type =
  | 'dropdown'
  | 'modal'
  | 'progress'
  | 'toast'
  | 'tab'
  | 'slider'
  | 'sidebar'
  | 'search'
  | 'rating'
  | 'calendar'
  | 'accordion'
  | 'embed'
  | (string & {})

export function module<T extends Type, U extends ModulePick<ModuleSettings, T>>(
  type: T,
  settings: U
): ModuleStore<U>

type ModuleShortcuted<T> = (settings: T) => ModuleStore<T>

export const dropdown: ModuleShortcuted<DropdownSettings>

export const modal: ModuleShortcuted<ModalSettings>

export const progress: ModuleShortcuted<ProgressSettings>

export const toast: ModuleShortcuted<ToastSettings>

export const tab: ModuleShortcuted<TabSettings>

export const slider: ModuleShortcuted<SliderSettings>

export const sidebar: ModuleShortcuted<SidebarSettings>

export const sidebar: ModuleShortcuted<SidebarSettings>

export const search: ModuleShortcuted<SearchSettings>

export const rating: ModuleShortcuted<RatingSettings>

export const checkbox: ModuleShortcuted<CheckboxSettings>

export const calendar: ModuleShortcuted<CalendarSettings>

export const accordion: ModuleShortcuted<AccordionSettings>

export const embed: ModuleShortcuted<EmbedSettings>

export const popup: ModuleShortcuted<PopupSettings>

export default Module
