import { SvelteComponentTyped } from 'svelte/internal'
import { Color, Size } from '../../variations'
import { SharedProps } from '../../shared_props'
import { Module } from '../module'
import Controller from './controller'

interface RatingProps extends SharedProps, Module<Controller>{
  icon?: string
  rating?: string
  maxRating?: string
  disabled?: boolean
  color?: Color
  size?: Size
}
/**
 * Vomantic Rating
 */
export default class Rating extends SvelteComponentTyped<RatingProps> {}
