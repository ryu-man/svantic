import { default as Table } from './table.svelte'
import { default as Header } from './header.svelte'
import { default as Body } from './body.svelte'
import { default as Footer } from './footer.svelte'
import { default as Row } from './row.svelte'
import { default as Cell } from './cell.svelte'
import { default as HCell } from './hcell.svelte'

Table.header = Header
Table.body = Body
Table.footer = Footer
Table.row = Row
Table.cell = Cell
Table.hcell = HCell

export { Table, Body, Cell, HCell, Footer, Header, Row }
export default Table
