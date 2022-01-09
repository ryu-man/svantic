import { SvelteComponentTyped } from 'svelte/internal'
import { Component } from '../../component'
import type { Size } from 'src/variations'
interface EmojiProps extends Component {
  name: Emojies
  disabled?: boolean
  loading?: boolean
  size?: Size
  link?: boolean
}
/**
 * Vomantic Emoji
 */
export default class Emoji extends SvelteComponentTyped<EmojiProps> {}

declare type Emojies =
  | 'adult'
  | 'adult_tone1'
  | 'adult_tone2'
  | 'adult_tone3'
  | 'adult_tone4'
  | 'adult_tone5'
  | 'alien'
  | 'angel'
  | 'angel_tone1'
  | 'angel_tone2'
  | 'angel_tone3'
  | 'angel_tone4'
  | 'angel_tone5'
  | 'angry'
  | 'anguished'
  | 'astonished'
  | 'athletic_shoe'
  | 'baby'
  | 'baby_tone1'
  | 'baby_tone2'
  | 'baby_tone3'
  | 'baby_tone4'
  | 'baby_tone5'
  | 'bald'
  | 'ballet_shoes'
  | 'ant'
  | 'baby_chick'
  | 'badger'
  | 'bamboo'
  | 'bat'
  | 'bear'
  | 'bee'
  | 'beetle'
  | 'bird'
  | 'blossom'
  | 'blowfish'
  | 'boar'
  | 'boom'
  | 'bouquet'
  | 'bug'
  | 'butterfly'
  | 'cactus'
  | 'camel'
  | 'cat2'
  | 'cat'
  | 'cherry_blossom'
  | 'chicken'
  | 'chipmunk'
  | 'christmas_tree'
  | 'cloud'
  | 'apple'
  | 'avocado'
  | 'baby_bottle'
  | 'bacon'
  | 'bagel'
  | 'banana'
  | 'beer'
  | 'beers'
  | 'bento'
  | 'beverage_box'
  | 'birthday'
  | 'bowl_with_spoon'
  | 'bread'
  | 'broccoli'
  | 'burrito'
  | 'butter'
  | 'cake'
  | 'candy'
  | 'canned_food'
  | 'carrot'
  | 'champagne'
  | 'champagne_glass'
  | 'cheese'
  | 'cherries'
  | 'chestnut'
  | '8ball'
  | 'art'
  | 'badminton'
  | 'banjo'
  | 'baseball'
  | 'basketball'
  | 'bow_and_arrow'
  | 'bowling'
  | 'boxing_glove'
  | 'chess_pawn'
  | 'circus_tent'
  | 'clapper'
  | 'cricket_game'
  | 'curling_stone'
  | 'dart'
  | 'drum'
  | 'field_hockey'
  | 'first_place'
  | 'fishing_pole_and_fish'
  | 'flying_disc'
  | 'football'
  | 'game_die'
  | 'goal'
  | 'golf'
  | 'guitar'
  | 'aerial_tramway'
  | 'airplane'
  | 'airplane_arriving'
  | 'airplane_departure'
  | 'airplane_small'
  | 'ambulance'
  | 'anchor'
  | 'articulated_lorry'
  | 'auto_rickshaw'
  | 'bank'
  | 'beach'
  | 'beach_umbrella'
  | 'bike'
  | 'blue_car'
  | 'bridge_at_night'
  | 'bullettrain_front'
  | 'bullettrain_side'
  | 'bus'
  | 'busstop'
  | 'camping'
  | 'canoe'
  | 'carousel_horse'
  | 'church'
  | 'city_dusk'
  | 'city_sunset'
  | 'abacus'
  | 'adhesive_bandage'
  | 'alarm_clock'
  | 'alembic'
  | 'amphora'
  | 'axe'
  | 'balloon'
  | 'ballot_box'
  | 'bar_chart'
  | 'barber'
  | 'basket'
  | 'bath'
  | 'bath_tone1'
  | 'bath_tone2'
  | 'bath_tone3'
  | 'bath_tone4'
  | 'bath_tone5'
  | 'bathtub'
  | 'battery'
  | 'bed'
  | 'bellhop'
  | 'black_nib'
  | 'blue_book'
  | 'bomb'
  | 'book'
  | '100'
  | '1234'
  | 'a'
  | 'ab'
  | 'abc'
  | 'abcd'
  | 'accept'
  | 'anger'
  | 'anger_right'
  | 'aquarius'
  | 'aries'
  | 'arrow_backward'
  | 'arrow_double_down'
  | 'arrow_double_up'
  | 'arrow_down'
  | 'arrow_down_small'
  | 'arrow_forward'
  | 'arrow_heading_down'
  | 'arrow_heading_up'
  | 'arrow_left'
  | 'arrow_lower_left'
  | 'arrow_lower_right'
  | 'arrow_right'
  | 'arrow_right_hook'
  | 'arrow_up'
  | 'checkered_flag'
  | 'crossed_flags'
  | 'england'
  | 'flag_ac'
  | 'flag_ad'
  | 'flag_ae'
  | 'flag_af'
  | 'flag_ag'
  | 'flag_ai'
  | 'flag_al'
  | 'flag_am'
  | 'flag_ao'
  | 'flag_aq'
  | 'flag_ar'
  | 'flag_as'
  | 'flag_at'
  | 'flag_au'
  | 'flag_aw'
  | 'flag_ax'
  | 'flag_az'
  | 'flag_ba'
  | 'flag_bb'
  | 'flag_bd'
  | 'flag_be'
  | 'flag_bf'
  | 'regional_indicator_a'
  | 'regional_indicator_b'
  | 'regional_indicator_c'
  | 'regional_indicator_d'
  | 'regional_indicator_e'
  | 'regional_indicator_f'
  | 'regional_indicator_g'
  | 'regional_indicator_h'
  | 'regional_indicator_i'
  | 'regional_indicator_j'
  | 'regional_indicator_k'
  | 'regional_indicator_l'
  | 'regional_indicator_m'
  | 'regional_indicator_n'
  | 'regional_indicator_o'
  | 'regional_indicator_p'
  | 'regional_indicator_q'
  | 'regional_indicator_r'
  | 'regional_indicator_s'
  | 'regional_indicator_t'
  | 'regional_indicator_u'
  | 'regional_indicator_v'
  | 'regional_indicator_w'
  | 'regional_indicator_x'
  | 'regional_indicator_y'
  | 'tone1'
  | 'tone2'
  | 'tone3'
  | 'tone4'