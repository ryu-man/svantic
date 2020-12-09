import { default as Form } from './form.svelte'
import { default as Field } from './field.svelte'
import { default as Fields } from './fields.svelte'

 Form.field = Field
 Form.fields = Fields

 export {Form, Field, Fields}
 export default Form
