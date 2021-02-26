import React from 'react'
import { useForm } from 'react-hook-form'

// Components
import Input from '@/components/atoms/Input'
import Select from '@/components/atoms/Select'

export default {
  title: 'Guides / Form / Validation'
}

type Props = {
  error: string
}

// Need this in case it does not work out
// check error type and return error value
// const ErrorMessage = (error): React.FC<Props> => {
//   if (error) {
//     switch (error.type) {
//       case 'required':
//         return ''
//       case 'min':
//         return ''
//       case 'max':
//         return 'This is not a valid age'
//       case 'minLength':
//         return 'This value needs to be at least 2 letters long'
//       case 'maxLength':
//         return 'This value is too long'
//       case 'pattern':
//         return 'Please enter a valid email address'
//       default:
//         return null
//     }
//   }
//   return null
// }

export const From = () => {
  const { register, handleSubmit, errors } = useForm();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

  // Log all data from form on submit
  const onSubmit = (data: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
    console.log(data)
    console.log('errors =>', errors)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* TODO: forwardRef is not recognized. Make sure it is, and passed to component */}
        <Input label="First name:" id="firstName" name="firstName" forwardRef={register({ required: true, minLength: { value: 2, message: 'String error' }})} />
        {/* Use name from input as variable */}
        {errors.firstName && errors.firstName.message}


        {/* Keep the mess here :D */}
        {/* <Input label="Last name:" id="lastName" name="lastName" forwardref={register({ required: true, minLength: 2 })} /> */}
        {/* {errors.lastName && ErrorMessage(errors.lastName)} */}

        {/* <Input label="Age:" name="age" type="number" forwardref={register({ required: true, min: 4, max: 110, message: 'Minmium age is 18' })} /> */}
        {/* {errors.age && ErrorMessage(errors.age)} */}

        {/* <Select label="Gender:" name="gender" forwardref={register({ required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select> */}
        {/* {errors.gender && ErrorMessage(errors.gender)} */}

        {/* <label>
          <p>Email:</p> */}
          {/* <Input name="email" forwardref={register({ required: true, minLength: 5, pattern: emailPattern })} /> */}
          {/* {errors.email && ErrorMessage(errors.email)}
        </label> */}

        <input type="submit" />
      </form>
    </>
  )
}
