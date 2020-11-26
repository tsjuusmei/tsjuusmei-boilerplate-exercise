import * as React from 'react'
import Icon from '.'

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

export const Team = () => <IconWrapper name="team" />
export const Onboarding = () => <IconWrapper name="onboarding" />
export const Seed = () => <IconWrapper name="seed" />
export const Helpdesk = () => <IconWrapper name="helpdesk" />
