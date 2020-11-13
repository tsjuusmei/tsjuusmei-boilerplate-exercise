import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withA11y } from '@storybook/addon-a11y'

import Icon from '.'

export default {
  title: 'Components / Atoms / Icon',
  decorators: [withA11y],
}

const sizes = [48, 32, 24]

const IconWrapper = ({
  children,
  name,
  ...props
}) => (
  <div
    className="wrapper"
    style={{
      display: 'flex',
      alignItems: 'center',
      paddingTop: 24
    }}
  >
    {sizes.map((size, idx) => <Icon key={idx} name={name} size={size} {...props} />)}
  </div>
)

IconWrapper.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string
}

export const Slice = () => {
  const [isHovered, setIsHovered] = useState(false)

  const toggleHover = () => {
    setIsHovered((prevIsHovered) => !prevIsHovered)
  }

  return (
    <IconWrapper
      name="slice"
      isHovered={isHovered}
      onMouseOver={toggleHover}
      onMouseLeave={toggleHover}
    />
  )
}
export const Team = () => <IconWrapper name="team" />
export const Onboarding = () => <IconWrapper name="onboarding" />
export const Seed = () => <IconWrapper name="seed" />
export const Helpdesk = () => <IconWrapper name="helpdesk" />
