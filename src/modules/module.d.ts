import { Component } from "../component";

declare interface Module<S> extends Component{
  settings?: S
  // onMount?: (controller: C) => void
}
export { Module }
export default Module
