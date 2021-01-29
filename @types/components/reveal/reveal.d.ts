import { Component } from '../../component'
import { SvelteComponentTyped } from 'svelte'

type Type = 'fade'|'move'|'rotate'
type Direction = 'up'|'down'|'left'|'right'
type State = 'active'|'disable'

interface RevealProps extends Component {
    type?: Type
    direction?:Direction
    state?:State
    instant?:boolean
}
/**
 * Vomantic Reveal
 */
export default class Reveal extends SvelteComponentTyped<RevealProps> {}
