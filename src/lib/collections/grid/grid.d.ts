import { SvelteComponentTyped } from 'svelte/internal'
import { Style } from '../../style'
import { Component } from '../../component'
import { Wide } from '../../variations'
import type Column from './column'
import type Row from './row'

type Reversed = `${'computer' | 'mobile' | 'tablet'}${' vertically' | ''}`
export type GridWide = `${Wide}${' computer' | ' mobile' | ' tablet' | ''}`
export type Visibility = `${
  | 'computer'
  | 'mobile'
  | 'tablet'
  | 'large screen'
  | 'wide screen'}${' only' | ''}`
interface GridProps extends Component {
  very?: boolean
  relaxed?: boolean
  padded?: boolean
  equal?: boolean
  container?: boolean
  stackable?: boolean
  reversed?: Reversed
  columns?: GridWide
  divided?: boolean | 'vertically'
  celled?: boolean | 'internally'
  centered?: boolean
}
/**
 * @description 
 */
declare class Grid extends SvelteComponentTyped<GridProps> {
  static column: new ()=> Column
  static row: new ()=> Row
}
export default Grid
