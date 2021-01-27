export interface CheckboxSettings {
  // Setting to true/false will determine whether an input will allow no selection. Auto will set disallow this behavior only for radio boxes
  uncheckable?: boolean
  // Whether callbacks for checked status should be fired on init as well as change
  fireOnInit?: boolean
  // Whether pressing the ENTER Key on a focused checkbox should also toggle it
  enableEnterKey?: boolean

  /***************** Callbacks **********************/

  // Callback after a checkbox is either checked or unchecked.
  onChange?: () => void
  // Callback after a checkbox is checked.
  onChecked?: () => void
  // Callback after a checkbox is set to undeterminate.
  onIndeterminate?: () => void
  // Callback after a checkbox is set to determinate.
  onDeterminate?: () => void
  // Callback after a checkbox is unchecked.
  onUnchecked?: () => void
  // Callback before a checkbox is checked. Can cancel change by returning false
  beforeChecked?: () => void
  // Callback before a checkbox is set to undeterminate. Can cancel change by returning false
  beforeIndeterminate?: () => void
  // Callback before a checkbox is set to determinate. Can cancel change by returning false
  beforeDeterminate?: () => void
  // Callback before a checkbox is unchecked. Can cancel change by returning false
  beforeUnchecked?: () => void
  // Callback after a checkbox is enabled.
  onEnable?: () => void
  // Callback after a checkbox is disabled.
  onDisable?: () => void
}
