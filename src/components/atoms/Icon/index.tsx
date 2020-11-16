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

const Icon: React.FC<Props> = ({ name }) => (
  <>
    {{
      'menu': <Menu />,
      'plus': <Plus />,
      'cross': <Cross />,
      'arrow': <Arrow />,
      'play': <Play />
    }[name]}
  </>
)

export default Icon

// import * as React from 'react'
// import { IconProps } from './types'
//
// // Icons
// import Menu from './Icons/Menu'
// import Plus from './Icons/Plus'
// import Cross from './Icons/Cross'
// import Arrow from './Icons/Arrow'
// import Play from './Icons/Play'
//
// // Types
// interface Props extends IconProps {
//   name: string,
//   color?: string
// }
//
// const IconElements = (props?: Props) => ({
//   'menu': <Menu {...props} />,
//   'plus': <Plus {...props} />,
//   'cross': <Cross {...props} />,
//   'arrow': <Arrow {...props} />,
//   'play': <Play {...props} />
// })
//
// const Icon: React.FC<Props> = ({ name, ...props }) => (
//   <>
//     {IconElements(props)[name]}
//   </>
// )
//
// export const icons = Object.keys(IconElements())
//
// export default Icon
