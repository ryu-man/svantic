import { default as Grid } from './grid.svelte'
import { default as Row } from './row.svelte'
import { default as Column } from './column.svelte'

export function init() {
    // @ts-ignore
    Grid.Row = Row
    // @ts-ignore
    Grid.Column = Column
}

export { Row, Column }
export default Grid
