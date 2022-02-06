import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'
import { Attach, Float, Size } from '../../variations'

interface MessageProps extends Component {
  message?: boolean
  list?: boolean
  icon?: boolean
  dissmissible?: boolean
  info?: boolean
  warning?: boolean
  positive?: boolean
  negative?: boolean
  visible?: boolean
  hidden?: boolean
  attached?: Attach
  floating?: Float
  size?: Size
  compact?: boolean
}
/**
 * Vomantic Message
 */
declare class Message extends SvelteComponentTyped<MessageProps> {}
export default Message
