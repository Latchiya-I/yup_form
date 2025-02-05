import * as yup from 'yup'

 export const userValidation =yup.object().shape({
    name:yup.string().name.required(),
    email:yup.string().email.required(),
    password:yup.string().min(3).max(7).required()
})