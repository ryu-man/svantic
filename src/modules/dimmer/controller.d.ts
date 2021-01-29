import {DimmerSettings} from './settings'
import Controller from '../controller'

type DimmerBehavior ='add content '|'show'|'hide'|'toggle'|'set opacity'|'create'|'get duration'|'get dimmer'|'has dimmer'|'is active'|'is animating'|'is dimmer'|'is dimmable'|'is disabled'|'is enabled'|'is page'|'is page dimmer'|'set active'|'set dimmable'|'set dimmed'|'set page dimmer'|'set disabled'
export default class EmbedController extends Controller<
  DimmerBehavior,
  DimmerSettings
> {
    /**    
*@description 	Detaches a given element from DOM and reattaches element inside dimmer    
*/
addContent(element: Element):void

/**    
*@description 	Shows dimmer    
*/
show():void

/**    
*@description 	Hides dimmer    
*/
hide():void

/**    
*@description 	Toggles current dimmer visibility    
*/
toggle():void

/**    
*@description 	Changes dimmer opacity    
*/
setOpacity(opacity:number):void

/**    
*@description 	Creates a new dimmer in dimmable context    
*/
create():void

/**    
*@description 	Returns current duration for show or hide event depending on current visibility    
*/
getDuration():number

/**    
*@description 	Returns DOM element for dimmer    
*/
getDimmer():Element

/**    
*@description 	Returns whether current dimmable has a dimmer    
*/
hasDimmer():boolean
/**    
*@description 	Whether section's dimmer is active 
*/
isActive():boolean	
/**    
*@description 	Whether dimmer is animating    
*/
isAnimating():boolean

/**    
*@description 	Whether current element is a dimmer    
*/
isDimmer():boolean

/**    
*@description 	Whether current element is a dimmable section    
*/
isDimmable():boolean

/**    
*@description 	Whether dimmer is disabled    
*/
isDisabled():void

/**    
*@description 	Whether dimmer is not disabled    
*/
isEnabled():boolean

/**    
*@description 	Whether dimmable section is body    
*/
isPage():boolean

/**    
*@description 	Whether dimmer is a page dimmer    
*/
isPageDimmer():boolean

/**    
*@description 	Sets page dimmer to active    
*/
setActive():void

/**    
*@description 	Sets an element as a dimmable section    
*/
setDimmable():void

/**    
*@description 	Sets a dimmable section as dimmed    
*/
setDimmed():void

/**    
*@description 	Sets current dimmer as a page dimmer    
*/
setPageDimmer():void

/**    
*@description 	Sets a dimmer as disabled    
*/
setDisabled():void

}
