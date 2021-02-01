import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'
import { default as H1 } from './h1'
import { default as H2 } from './h2'
import { default as H3 } from './h3'
import { default as H4 } from './h4'
import { default as H5 } from './h5'
import type Sub from './sub'

interface HeaderProps extends Component {
  active?: boolean
  disabled?: boolean
  fluid?: boolean
  circular?: boolean
  loading?: boolean
  primary?: boolean
  secondary?: boolean
  compact?: boolean
  basic?: boolean
  toggle?: boolean
  positive?: boolean
  negative?: boolean
  tertiary?: boolean
  inverted?: boolean
  icon?: boolean
  sub?: boolean
}
/**
 * @description
 */
declare class Header extends SvelteComponentTyped<HeaderProps> {
static H1 : new ()=> H1
static H2 : new ()=> H2
static H3 : new ()=> H3
static H4 : new ()=> H4
static H5 : new ()=> H5
static Sub : new ()=> Sub
}
export default Header
