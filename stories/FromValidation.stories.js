import React from 'react'
// https://react-hook-form.com/
import { useForm } from 'react-hook-form'

export default {
  title: 'Guides / Form / Validation'
}

// check error type and return error value
const ErrorMessage = error => {
  if (error) {
    switch (error.type) {
      case 'required':
        return <p>This is a required field</p>
      case 'min':
        return <p>Minmium age is 18</p>
      case 'max':
        return <p>This is not a valid age</p>
      case 'minLength':
        return <p>This value needs to be at least 2 letters long</p>
      case 'maxLength':
        return <p>This value is too long</p>
      case 'pattern':
        return <p>Please enter a valid email address</p>
      default:
        return null
    }
  }
  return null
}

export const From = () => {
  const { register, handleSubmit, errors } = useForm();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

  // Log all data from form on submit
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>First name</p>
          <input name="firstName" ref={register({ required: true, minLength: 2 })} />
          {/* Use name from input as variable */}
          {errors.firstName && ErrorMessage(errors.firstName)}
        </label>

        <label>
          <p>Last name:</p>
          <input name="lastName" ref={register({ required: true, minLength: 2 })} />
          {errors.lastName && ErrorMessage(errors.lastName)}
        </label>

        <label>
          <p>Age:</p>
          <input name="age" type="number" ref={register({ required: true, min: 4, max: 110 })} />
          {errors.age && ErrorMessage(errors.age)}
        </label>

        <label>
          <p>Gender:</p>
          <select name="gender" ref={register({ required: true })}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && ErrorMessage(errors.gender)}
        </label>

        <label>
          <p>Email:</p>
          <input name="email" ref={register({ required: true, minLength: 5, pattern: emailPattern })} />
          {errors.email && ErrorMessage(errors.email)}
        </label>

        <input type="submit" />
      </form>
    </>
  )
}
