import * as React from 'react'

// Icons
import Menu from './Icons/Menu'
import Plus from './Icons/Plus'
import Cross from './Icons/Cross'
import Arrow from './Icons/Arrow'
import Play from './Icons/Play'

type Props = {
  name: string,
  size?: number,
  color?: string
}

const Icon: React.FunctionComponent<Props> = ({
  name,
  ...props
}) => (
  <>
    {{
      menu: <Menu {...props} />,
      plus: <Plus {...props} />,
      cross: <Cross {...props} />,
      arrow: <Arrow {...props} />,
      play: <Play {...props} />
    }[name]}
  </>
)

export default Icon
