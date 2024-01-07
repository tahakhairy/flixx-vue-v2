import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)
    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('confirmed', confirmed)
    defineRule('excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `${ctx.field} cannot be empty.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} may contain only alphabetical characters and spaces.`,
          email: `The field ${ctx.field} must be a valid email.`,
          confirmed: `The passwords don't match.`
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`

        return message
      }
    })
  }
}
