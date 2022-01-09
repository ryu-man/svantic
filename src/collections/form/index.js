import { default as Form } from './form.svelte'
import { default as Field } from './field.svelte'
import { default as Fields } from './fields.svelte'

export function init() {
    // @ts-ignore
    Form.Field = Field
    // @ts-ignore
    Form.Fields = Fields
}

export { Field, Fields }

export default Form
