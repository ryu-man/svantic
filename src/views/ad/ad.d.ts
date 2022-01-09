import type { SvelteComponentTyped } from 'svelte'
import { Size } from '../../variations'

type Unite =
  | 'rectangle'
  | 'button'
  | 'skyscraper'
  | 'banner'
  | 'leaderboard'
  | 'billboard'
  | 'panorama'
  | 'netboard'
  | 'page'

type Prefix =
  | 'square '
  | 'wide '
  | 'vertical '
  | 'top '
  | 'bottom '
  | 'left '
  | 'right '
  | 'half '
  | ''
type Type = `${Prefix}${Unite}`

interface AdProps {
  type?: Type
  centered?: boolean
  test?: boolean
  dataText?: string
  size?: Size
}
type AdEvents = {
  mount: CustomEvent<HTMLDivElement>
}
export default class Ad extends SvelteComponentTyped<AdProps, AdEvents> {}
