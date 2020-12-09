import * as React from 'react'
import Icon, { icons } from '.'

export default {
  title: 'Components / Atoms / Icon',
  component: Icon
}

const sizes = [48, 32, 24]

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
      paddingTop: 24
    }}
  >
    {sizes.map((size, idx) => <Icon key={idx} name={name} size={size} />)}
  </div>
)

export const All = () => (
  <div>
    {icons.map((icon, idx) => (
      <div key={idx} style={{ marginBottom: '48px' }}>
        <p>{icon}</p>
        <IconWrapper name={icon} />
      </div>
    ))}
  </div>
)
