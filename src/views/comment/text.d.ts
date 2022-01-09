import type { SvelteComponentTyped } from 'svelte'
import type { Component } from '../../component'

interface TextProps extends Component {}

type TextEvents = {
  mount: CustomEvent<HTMLDivElement>
}

export default class Text extends SvelteComponentTyped<TextProps, TextEvents> {}
