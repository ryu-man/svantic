declare type Style = {
  [key in keyof CSSStyleDeclaration]?: string
}
export interface Component {
  class?: string
  style?: Style
  dimmable?: boolean
}

export type SvanticProps = {
  class?: string
  style?: Style
  dimmable?: boolean
}

export type SvanticEvents = {
  mount: CustomEvent<HTMLDivElement>
}

export type MountEvent<T extends HTMLElement> = {
  mount: CustomEvent<T>
}

declare type EventHandler<E = Event, T = HTMLElement> = (
  this: HTMLElement,
  event: E & {
    target: EventTarget & T
  }
) => any
declare type ClipboardEventHandler<T> = EventHandler<ClipboardEvent, T>
declare type CompositionEventHandler<T> = EventHandler<CompositionEvent, T>
declare type DragEventHandler<T> = EventHandler<DragEvent, T>
declare type FocusEventHandler<T> = EventHandler<FocusEvent, T>
declare type FormEventHandler<T> = EventHandler<Event, T>
declare type KeyboardEventHandler<T> = EventHandler<KeyboardEvent, T>
declare type MouseEventHandler<T> = EventHandler<MouseEvent, T>
declare type TouchEventHandler<T> = EventHandler<TouchEvent, T>
declare type PointerEventHandler<T> = EventHandler<PointerEvent, T>
declare type UIEventHandler<T> = EventHandler<UIEvent, T>
declare type WheelEventHandler<T> = EventHandler<WheelEvent, T>
declare type AnimationEventHandler<T> = EventHandler<AnimationEvent, T>
declare type TransitionEventHandler<T> = EventHandler<TransitionEvent, T>
declare type MessageEventHandler<T> = EventHandler<MessageEvent, T>

export interface DOMEvents<T> {
  copy?: ClipboardEventHandler<T>
  cut?: ClipboardEventHandler<T>
  paste?: ClipboardEventHandler<T>
  compositionend?: CompositionEventHandler<T>
  compositionstart?: CompositionEventHandler<T>
  compositionupdate?: CompositionEventHandler<T>
  focus?: FocusEventHandler<T>
  focusin?: FocusEventHandler<T>
  focusout?: FocusEventHandler<T>
  blur?: FocusEventHandler<T>
  change?: FormEventHandler<T>
  input?: FormEventHandler<T>
  reset?: FormEventHandler<T>
  submit?: FormEventHandler<T>
  invalid?: EventHandler<T>
  load?: EventHandler
  error?: EventHandler
  keydown?: KeyboardEventHandler<T>
  keypress?: KeyboardEventHandler<T>
  keyup?: KeyboardEventHandler<T>
  abort?: EventHandler<T>
  canplay?: EventHandler<T>
  canplaythrough?: EventHandler<T>
  cuechange?: EventHandler<T>
  durationchange?: EventHandler<T>
  emptied?: EventHandler<T>
  encrypted?: EventHandler<T>
  ended?: EventHandler<T>
  loadeddata?: EventHandler<T>
  loadedmetadata?: EventHandler<T>
  loadstart?: EventHandler<T>
  pause?: EventHandler<T>
  play?: EventHandler<T>
  playing?: EventHandler<T>
  progress?: EventHandler<T>
  ratechange?: EventHandler<T>
  seeked?: EventHandler<T>
  seeking?: EventHandler<T>
  stalled?: EventHandler<T>
  suspend?: EventHandler<T>
  timeupdate?: EventHandler<T>
  volumechange?: EventHandler<T>
  waiting?: EventHandler<T>
  auxclick?: MouseEventHandler<T>
  click?: MouseEventHandler<T>
  contextmenu?: MouseEventHandler<T>
  dblclick?: MouseEventHandler<T>
  drag?: DragEventHandler<T>
  dragend?: DragEventHandler<T>
  dragenter?: DragEventHandler<T>
  dragexit?: DragEventHandler<T>
  dragleave?: DragEventHandler<T>
  dragover?: DragEventHandler<T>
  dragstart?: DragEventHandler<T>
  drop?: DragEventHandler<T>
  mousedown?: MouseEventHandler<T>
  mouseenter?: MouseEventHandler<T>
  mouseleave?: MouseEventHandler<T>
  mousemove?: MouseEventHandler<T>
  mouseout?: MouseEventHandler<T>
  mouseover?: MouseEventHandler<T>
  mouseup?: MouseEventHandler<T>
  select?: EventHandler<T>
  selectionchange?: EventHandler<T>
  selectstart?: EventHandler<T>
  touchcancel?: TouchEventHandler<T>
  touchend?: TouchEventHandler<T>
  touchmove?: TouchEventHandler<T>
  touchstart?: TouchEventHandler<T>
  gotpointercapture?: PointerEventHandler<T>
  pointercancel?: PointerEventHandler<T>
  pointerdown?: PointerEventHandler<T>
  pointerenter?: PointerEventHandler<T>
  pointerleave?: PointerEventHandler<T>
  pointermove?: PointerEventHandler<T>
  pointerout?: PointerEventHandler<T>
  pointerover?: PointerEventHandler<T>
  pointerup?: PointerEventHandler<T>
  lostpointercapture?: PointerEventHandler<T>
  scroll?: UIEventHandler<T>
  resize?: UIEventHandler<T>
  wheel?: WheelEventHandler<T>
  animationstart?: AnimationEventHandler<T>
  animationend?: AnimationEventHandler<T>
  animationiteration?: AnimationEventHandler<T>
  transitionend?: TransitionEventHandler<T>
  outrostart?: EventHandler<CustomEvent<null>, T>
  outroend?: EventHandler<CustomEvent<null>, T>
  introstart?: EventHandler<CustomEvent<null>, T>
  introend?: EventHandler<CustomEvent<null>, T>
  message?: MessageEventHandler<T>
  messageerror?: MessageEventHandler<T>
  cancel?: EventHandler<T>
  close?: EventHandler<T>
  fullscreenchange?: EventHandler<T>
  fullscreenerror?: EventHandler<T>
}
export {}
