import '../../../fomantic/dist/components/statistic.css'

import { default as Statistics } from './statistics.svelte'
import { default as Statistic } from './statistic.svelte'
import {default as Label} from './label.svelte'
import {default as Value} from './value.svelte'

Statistic.Label = Label
Statistic.Value = Value

export {Statistic, Statistics}
export default Statistic
