import * as React from 'react'
import Icon, { icons, IconActionSize } from '.'

export default {
  title: 'Components / Atoms / Icon',
  component: Icon
}

const sizes = IconActionSize

// Define types
type IconProps = {
  name: string
}

const IconWrapper: React.FC<IconProps> = ({ name }) => (
  <div
    className="wrapper"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 128
    }}
  >
    {sizes.map((size, idx) => <Icon key={idx} name={name} size={size} />)}
  </div>
)

export const All = () => (
  <div>
    {icons.map((icon, idx) => (
      <div
        key={idx}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 32
        }}
      >
        <p style={{width: '128px'}}>{icon}</p>
        <IconWrapper name={icon} />
      </div>
    ))}
  </div>
)
