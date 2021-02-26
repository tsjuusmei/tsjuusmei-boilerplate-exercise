import * as React from 'react'
import { IconProps } from './types'

// Icons Imports

// Action
import Placeholder from './Icons/Action/Placeholder'
import Checkmark from './Icons/Action/Checkmark'
import Triangle from './Icons/Action/Triangle'
import Chevron from './Icons/Action/Chevron'
import ExternalLink from './Icons/Action/ExternalLink'
import Plus from './Icons/Action/Plus'
import Minus from './Icons/Action/Minus'
import Warning from './Icons/Action/Warning'
import Close from './Icons/Action/Close'

// Social
import Facebook from './Icons/Social/Facebook'
import Twitter from './Icons/Social/Twitter'
import Instagram from './Icons/Social/Instagram'
import Google from './Icons/Social/Google'
import Youtube from './Icons/Social/Youtube'
import Snapchat from './Icons/Social/Snapchat'
import Apple from './Icons/Social/Apple'
import Pinterest from './Icons/Social/Pinterest'
import LinkedIn from './Icons/Social/LinkedIn'
import Dribbble from './Icons/Social/Dribbble'
import Reddit from './Icons/Social/Reddit'

// Add Import Above

// Types
interface Props extends IconProps {
  name: string
}

const iconElements = (props?: React.PropsWithChildren<IconProps>) => ({
  'placeholder': <Placeholder {...props} />,
  'checkmark': <Checkmark {...props} />,
  'triangle': <Triangle {...props} />,
  'chevron': <Chevron {...props} />,
  'external-link': <ExternalLink {...props} />,
  'minus': <Minus {...props} />,
  'plus': <Plus {...props} />,
  'warning': <Warning {...props} />,
  'close': <Close {...props} />,
  'facebook': <Facebook {...props} />,
  'twitter': <Twitter {...props} />,
  'instagram': <Instagram {...props} />,
  'google': <Google {...props} />,
  'youtube': <Youtube {...props} />,
  'snapchat': <Snapchat {...props} />,
  'apple': <Apple {...props} />,
  'pinterest': <Pinterest {...props} />,
  'linkedin': <LinkedIn {...props} />,
  'dribbble': <Dribbble {...props} />,
  'reddit': <Reddit {...props} />,
})// Add Icon Above

const Icon: React.FC<Props> = ({ name, ...props }) => (
  <>
    {iconElements(props)[name]}
  </>
)

export const icons = Object.keys(iconElements())

export default Icon
