import {default as Grid} from './grid.svelte'
import {default as Row} from './row.svelte'
import {default as Column} from './column.svelte'

Grid.Row = Row
Grid.Column = Column

export {Grid, Row, Column}
export default Grid