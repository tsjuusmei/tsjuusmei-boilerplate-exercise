import * as React from 'react'
import { IconProps } from './types'

// Icons
import Menu from './Icons/Menu'
import Plus from './Icons/Plus'
import Cross from './Icons/Cross'
import Arrow from './Icons/Arrow'
import Play from './Icons/Play'

// Types
interface Props extends IconProps {
  name: string
}

const iconElements = (props?: React.PropsWithChildren<IconProps>) => ({
  'menu': <Menu {...props} />,
  'plus': <Plus {...props} />,
  'cross': <Cross {...props} />,
  'arrow': <Arrow {...props} />,
  'play': <Play {...props} />
})

const Icon: React.FC<Props> = ({ name, ...props }) => (
  <>
    {iconElements(props)[name]}
  </>
)

export const icons = Object.keys(iconElements())

export default Icon
