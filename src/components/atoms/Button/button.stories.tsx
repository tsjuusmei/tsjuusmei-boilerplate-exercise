import * as React from 'react'
import { addDecorator, storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import Button from '.'

addDecorator(withA11y)

storiesOf('Components', module)
  .add('Button', () => (
    <Button
      variation="primary"
      size="l"
    >
      Button
    </Button>
  ))
