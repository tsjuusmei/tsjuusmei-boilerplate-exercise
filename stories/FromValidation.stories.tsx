import React from 'react'
// See https://react-hook-form.com/
import { useForm } from 'react-hook-form'

// Components
import Input from '@/components/atoms/Input'

export default {
  title: 'Guides / Form / Validation'
}

export const From = () => {
  // Functions from react-hook-form
  const { register, handleSubmit, errors } = useForm();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

  // Log all data from form on submit
  const onSubmit = (data: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
    console.log(data)
    console.log('errors =>', errors)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="First name:"
        id="firstName"
        name="firstName"
        // You will need to push the data to the component in order to make it work. The component should be created with a `React.forwardRef`
        // See: https://reactjs.org/docs/forwarding-refs.html
        ref={register({
          required: {
            // It's not required to provide a message, you will then only need `required: true/false`
            value: true,
            message: 'Please provide a value'
          },
          minLength: {
            value: 2,
            message: 'Please provide a first name'
          }}
        )}
      />
      {/* Use name from input as variable */}
      {errors.firstName && errors.firstName.message}

      <Input
        label="Last name:"
        id="lastName"
        name="lastName"
        ref={register({
          required: false,
          minLength: {
            value: 2,
            message: 'Please provide a valid last name'
          }}
        )}
      />
      {errors.lastName && errors.lastName.message}

      <Input
        label="Age:"
        name="age"
        type="number"
        ref={register({
          required: {
            value: true,
            message: 'This value is required'
          },
          min: {
            value: 18,
            message: 'Minimum age is 18'
          },
          max: {
            value: 110,
            message: 'Maximum age is 110'
          },
        })}
      />
      {errors.age && errors.age.message}

      {/* TODO: Uncomment Select example when there is a working Select component */}
      {/* <Select
        label="Gender:"
        name="gender"
        ref={register({
            required: true
          })
        }
      >
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>
      {errors.gender && errors.gender.message} */}

      <Input
        label="Email:"
        id="Email"
        name="Email"
        ref={register({
          required: {
            value: true,
            message: 'Please provide an email address'
          },
          pattern: {
            value: emailPattern,
            message: 'Please provide a valid email address.'
          }}
        )}
      />
      {errors.Email && errors.Email.message}

      <input type="submit" />
    </form>
  )
}
