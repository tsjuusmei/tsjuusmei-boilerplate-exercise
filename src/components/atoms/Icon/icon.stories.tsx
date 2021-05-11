import * as React from 'react'
import Icon, { icons } from '.'
import { IconProps} from '@/components/atoms/Icon/types'

export default {
  title: 'Components / Atoms / Icon',
  component: Icon
}

const sizes = [16, 20, 24]

// Define types
interface Props extends IconProps {
  name: string,
}

const IconWrapper: React.FC<Props> = ({ name }) => (
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
