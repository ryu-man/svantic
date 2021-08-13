import { SvelteComponentTyped } from 'svelte/internal'
import { Color, Size } from '../../variations'
import { Module } from '../module'
import Controller from './controller'
import {RatingSettings} from './settings'

interface RatingProps extends Module<Controller, RatingSettings>{
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
export default class Rating extends SvelteComponentTyped<RatingProps> {
  /**
   *@description 	Sets rating programmatically
   */
   setRating(rating): void

   /**
    *@description 	Gets current rating
    */
   getRating(): Promise<String>
 
   /**
    *@description 	Disables interactive rating mode
    */
   disable(): void
 
   /**
    *@description 	Enables interactive rating mode
    */
   enable(): void
 
   /**
    *@description 	Clears current rating
    */
   clearRating(): void
}
