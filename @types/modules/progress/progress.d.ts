import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Attach, Color, Size, Speed } from '../../variations'
import { Module } from '../module'
import Controller from './controller'
import {ProgressSettings} from './settings'

type Type = 'standard' | 'indicating'
type State =
  | 'indeterminate'
  | 'swinging indeterminate'
  | 'sliding indeterminate'
  | 'filling indeterminate'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'success'
  | 'active'

interface ProgressProps extends Module<Controller, ProgressSettings> {
  class?: string
  type?: Type
  attached?: Attach
  speed?: Speed
  state?: State
  size?: Size
  color?: Color
  value?: number
  total?: number
  inverted?: boolean
  style?: Style
}

/**
 * Vomantic Progress
 */
export default class Progress extends SvelteComponentTyped<ProgressProps> {}
