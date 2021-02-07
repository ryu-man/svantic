import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Attach, Color, Size, Speed } from '../../variations'
import { Module } from '../module'
import Controller from './controller'
import { ProgressSettings } from './settings'

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
  indicating?: boolean
  attached?: Attach
  speed?: Speed
  size?: Size
  color?: Color
  value?: number
  total?: number
  inverted?: boolean
  style?: Style
  indeterminate?: boolean | 'swinging' | 'sliding' | 'filling'
  disabled?: boolean
  error?: boolean
  warning?: boolean
  success?: boolean
  active?: boolean
}

/**
 * Vomantic Progress
 */
export default class Progress extends SvelteComponentTyped<ProgressProps> {
  
}
