import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'
import type { Wide } from 'src/variations'
import type Cell from './cell'
import type Footer from './footer'
import type HCell from './hcell'
import type Header from './Header'
import type Row from './row'
import type Header from './header'

interface TableProps extends Component {
  definition?: boolean
  structured?: boolean
  column?: Wide
  wide?: Wide
  line?: boolean
  basic?: boolean
  fixed?: boolean
  celled?: boolean
  padded?: boolean
  single?: boolean
  compact?: boolean
  striped?: boolean
  sortable?: boolean
  inverted?: boolean
  very?: boolean
  selectable?: boolean
  collapsing?: boolean
  unstackable?: boolean
}
/**
 * @description A table displays a collections of data grouped into rows
 */
declare class Table extends SvelteComponentTyped<TableProps> {
  static header: new () => Header
  static body: new () => Body
  static footer: new () => Footer
  static row: new () => Row
  static cell: new () => Cell
  static hcell: new () => HCell
}
export default Table
