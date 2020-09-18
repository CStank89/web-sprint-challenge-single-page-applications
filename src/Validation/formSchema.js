import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string()
    .required('Username is required')
    .min(3, 'Username must be 3 chars or longer'),
  pepperoni: yup.boolean(),
  cheese: yup.boolean(),
  conions: yup.boolean(),
  ham: yup.boolean(),
  pineapple: yup.boolean(),
  bacon: yup.boolean(),
  roastedgarlic: yup.boolean(),
  chicken: yup.boolean(),
  sausage: yup.boolean(),
})