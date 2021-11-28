import { default as Table } from './table.svelte'
import { default as Header } from './header.svelte'
import { default as Body } from './body.svelte'
import { default as Footer } from './footer.svelte'
import { default as Row } from './row.svelte'
import { default as Cell } from './cell.svelte'
import { default as HCell } from './hcell.svelte'

export function init() {
    // @ts-ignore
    Table.Header = Header
    // @ts-ignore
    Table.Body = Body
    // @ts-ignore
    Table.Footer = Footer
    // @ts-ignore
    Table.Row = Row
    // @ts-ignore
    Table.Cell = Cell
    // @ts-ignore
    Table.Hcell = HCell
}

export { Body, Cell, HCell, Footer, Header, Row }
export default Table
