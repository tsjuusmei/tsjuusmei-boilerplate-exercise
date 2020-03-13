import * as React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import Icon from '.'

addDecorator(withA11y)

storiesOf('Components / Icons', module)
  .add('Menu', () => (
    <Icon name="menu" size={48} />
  ))
  .add('Plus', () => (
    <div className="wrapper">
      <Icon name="plus" size={48} />
      <Icon name="plus" size={32} />
      <Icon name="plus" size={24} />
    </div>
  ))
  .add('Cross', () => (
    <div className="wrapper">
      <Icon name="cross" size={48} />
      <Icon name="cross" size={32} />
      <Icon name="cross" size={24} />
    </div>
  ))
  .add('Arrow', () => (
    <Icon name="arrow" size={24} />
  ))
  .add('Play', () => (
    <Icon name="play" size={48} />
  ))
