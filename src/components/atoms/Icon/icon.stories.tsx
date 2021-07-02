import * as React from 'react'
import Icon, { iconComponents, IconName } from '.'
import { IconSize } from './types'

export default {
  title: 'Components / Atoms / Icon',
  component: Icon
}

const sizes = [IconSize.Medium, IconSize.Large, IconSize.XLarge]

// Define types
type IconProps = {
  name: IconName
}

const IconWrapper: React.FC<IconProps> = ({ name }) => (
  <div
    className="wrapper"
    style={{
      display: 'grid',
      gap: 16,
      alignItems: 'center',
      gridTemplateColumns: '1fr 1fr 1fr 1fr'
    }}
  >
    {sizes.map((size, idx) => <Icon key={idx} name={name} size={size} />)}
  </div>
)

export const All = () => (
  <div>
    {Object.entries(iconComponents).map(([icon], idx) => (
      <div
        key={idx}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 32
        }}
      >
        <p style={{width: '128px'}}>{icon}</p>
        <IconWrapper name={icon as IconName} />
      </div>
    ))}
  </div>
)
