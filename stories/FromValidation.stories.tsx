import React from 'react'
import {
  useForm,
  FormProvider
} from 'react-hook-form'
// See https://react-hook-form.com/

// Helpers
import { EMAIL_PATTERN } from '@/constants/global'

// Components
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'

export default {
  title: 'Guides / Form / Validation'
}

export const From = () => {
  // Functions from react-hook-form
  const methods = useForm()
  const emailPattern = {
    value: EMAIL_PATTERN,
    message: 'this is an error'
  }

  // Log all data from form on submit
  const onSubmit = (data: (e: React.ChangeEvent<HTMLInputElement>) => (void)) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
          label="Email:"
          id="email"
          name="email"
          rules={{
            required: 'error message',
            pattern: emailPattern,
          }}
        />
        <Button type="submit" style={{ display: 'block' }}>
          Submit
        </Button>
      </form>
    </FormProvider>
  )
}
