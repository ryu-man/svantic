import type { ProgressSettings } from './settings'
import Controller from '../controller'

type ProgressBehavior =
  | 'set percent'
  | 'set progress'
  | 'increment'
  | 'decrement'
  | 'update progress'
  | 'complete'
  | 'reset'
  | 'set total'
  | 'get text'
  | 'get normalized value'
  | 'get percent'
  | 'get value'
  | 'get total'
  | 'is complete'
  | 'is success'
  | 'is warning'
  | 'is error'
  | 'is active'
  | 'set active'
  | 'set warning'
  | 'set success'
  | 'set error'
  | 'set duration'
  | 'set label'
  | 'set bar label'
  | 'remove active'
  | 'remove warning'
  | 'remove success'
  | 'remove error'
export default class ProgressController extends Controller<
  ProgressBehavior,
  ProgressSettings
> {
  /**
   *@description 	Sets current percent of progress to value. If using a total will convert from percent to estimated value. percent can be array of percent like [20,30,50], comma-separated string like'20,30,50' for `.ui.multiple.progress`.
   */
  setPercent(percent: any): void
  /**
   *@description 	Sets progress to specified value. Will automatically calculate percent from total. value can be array of values like [5,3,10], comma-separated string like'5,3,10' for `.ui.multiple.progress`.
   */
  setProgress(value?: number | number[]): void
  /**
   *@description 	Increments progress by increment value, if not passed a value will use random amount specified in settings
   */
  increment(incrementValue: number): void
  /**
   *@description 	Decrements progress by decrement value, if not passed a value will use random amount specified in settings
   */
  decrement(decrementValue: number): void
  /**
   *@description 	Immediately updates progress to value, ignoring progress animation interval delays. value can be array of values like [5,3,10], comma-separated string like'5,3,10' for `.ui.multiple.progress`.
   */
  updateProgress(value?: number | number[]): void
  /**
   *@description 	Finishes progress and sets loaded to 100%. Set keepState to true (default false) to stop the active animation only without setting the progress to 100%.
   */
  complete(keepState: boolean): void
  /**
   *@description 	Resets progress to zero
   */
  reset(): void
  /**
   *@description 	Set total to a new value
   */
  setTotal(total: number): void
  /**
   *@description 	Replaces templated string with value, total, percent left and percent.
   */
  getText(text: string): string
  /**
   *@description 	Returns normalized value inside acceptable range specified by total.
   */
  getNormalizedValue(value: number): number
  /**
   *@description 	Returns percent as last specified
   */
  getPercent(): number
  /**
   *@description 	Returns current progress value
   */
  getValue(): number
  /**
   *@description 	Returns total
   */
  getTotal(): number
  /**
   *@description 	Returns whether progress is completed
   */
  isComplete(): boolean
  /**
   *@description 	Returns whether progress was a success
   */
  isSuccess(): boolean
  /**
   *@description 	Returns whether progress is in warning state
   */
  isWarning(): boolean
  /**
   *@description 	Returns whether progress is in error state
   */
  isError(): boolean
  /**
   *@description 	Returns whether progress is in active state
   */
  isActive(): boolean
  /**
   *@description 	Sets progress to active state
   */
  setActive(): void
  /**
   *@description 	Sets progress to warning state. Set keepState to true (default false) to keep the progressbar state and the current percentage without raising it up to 100%
   */
  setWarning(text: any, keepState: any): void
  /**
   *@description 	Sets progress to success state. Set keepState to true (default false) to keep the progressbar state and the current percentage without raising it up to 100%
   */
  setSuccess(text: string, keepState: boolean): void
  /**
   *@description 	Sets progress to error state. Set keepState to true (default false) to keep the progressbar state and the current percentage without raising it up to 100%
   */
  setError(text: string, keepState: boolean): void
  /**
   *@description 	Changes progress animation speed
   */
  setDuration(value: number): void
  /**
   *@description 	Sets progress exterior label to text
   */
  setLabel(text: string): void
  /**
   *@description 	Sets progress bar label to text
   */
  setBarLabel(text: string): void
  /**
   *@description 	Removes progress to active state
   */
  removeActive(): void
  /**
   *@description 	Removes progress to warning state
   */
  removeWarning(): void
  /**
   *@description 	Removes progress to success state
   */
  removeSuccess(): void
  /**
   *@description 	Removes progress to error state
   */
  removeError(): void
}
