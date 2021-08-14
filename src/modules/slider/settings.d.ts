export default interface SliderSettings {
  /** The lowest value the slider can be */
  min?: number
  /** The max value the slider can be */
  max?: number
  /** The slider step. Set to 0 to disable step */
  step?: number
  /** The value the slider will start at */
  start?: number
  /** The second value to set in case of a range slider */
  end?: number
  /** The type of label to display for a labeled slider. Can be number or letter */
  labelType?: number
  /** You can specify a function here which consumes the current label value as parameter and should return a custom label text according to the given value
      interpretLabel: function(value){
        //do something with 'value' and return matching text
        return myCustomText;
      } */
  interpretLabel?: boolean | ((label: string) => string)
  /** Show ticks on a labeled slider */
  showLabelTicks?: boolean
  /** Define smoothness when the slider is moving */
  smooth?: boolean
  /** Whether labels should auto adjust on window resize */
  autoAdjustLabels?: boolean
  /** The distance between labels */
  labelDistance?: number
  /** Number of decimals to use with an unstepped slider */
  decimalPlaces?: number
  /** Page up/down multiplier. Define how many more times the steps to take on page up/down press */
  pageMultiplier?: number
  /** Prevents the lower thumb to crossover the thumb handle. */
  preventCrossover?: boolean
  /** Is called when the slider value is changed */
  onChange?: () => any
  /** Is called when the slider is moving */
  onMove?: () => any
}
