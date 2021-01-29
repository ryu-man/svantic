import { Component } from "../component";

declare interface Module<C, S> extends Component{
  settings?: S
  onMount?: (controller: C) => void
}
export { Module }
