import type { TabularMenuSettings } from './settings'
import Controller from '../controller'

type TabBehavior =
  | 'attach events'
  | 'change tab'
  | 'set state'
  | 'get path'
  | 'is tab'
  | 'cache read'
  | 'cache add'
  | 'cache remove'
export default class TabularController extends Controller<
  TabBehavior,
  TabularMenuSettings
> {
  /**    
*@description 	Attaches tab action to given selector. Default event if none specified is toggle    
*/
attachEvents(selector:string, event):void

/**    
*@description 	Changes tab to path    
*/
changeTab(path:string):void

/**    
*@description 	Sets current path to state    
*/
setState(path:string):void

/**    
*@description 	Returns current path    
*/
getPath():string

/**    
*@description 	Returns whether tab exists    
*/
isTab():boolean

/**    
*@description 	Returns cached HTML for path    
*/
cacheRead(path:string):void

/**    
*@description 	Sets cached HTML for path    
*/
cacheAdd(path:string, html:HTMLElement):void

/**    
*@description 	Removes cached HTML for path    
*/
cacheRemove(path:string):void

}
