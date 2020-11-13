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

const Icon: React.FunctionComponent<Props> = ({
  name,
  ...props
}) => (
  <>
    {{
      'menu': <Menu {...props} />,
      'plus': <Plus {...props} />,
      'cross': <Cross {...props} />,
      'arrow': <Arrow {...props} />,
      'play': <Play {...props} />
    }[name]}
  </>
)

export default Icon
