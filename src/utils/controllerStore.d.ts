import { Writable } from 'svelte/store'

export type ControllerStore<T> = Omit<Writable<T>, 'update'>
export const controllerStore: <T>(
  callback?: (controller: T) => void
) => ControllerStore<T>
