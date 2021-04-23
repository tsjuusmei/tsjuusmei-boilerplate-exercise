import * as React from 'react'
import { IconProps } from './types'

// Icons Imports

// Action
import Checkmark from './Icons/Action/Checkmark'
import Chevron from './Icons/Action/Chevron'
import Close from './Icons/Action/Close'
import ExternalLink from './Icons/Action/ExternalLink'
import Minus from './Icons/Action/Minus'
import Placeholder from './Icons/Action/Placeholder'
import Plus from './Icons/Action/Plus'
import Triangle from './Icons/Action/Triangle'
import Warning from './Icons/Action/Warning'

// Social
import Apple from './Icons/Social/Apple'
import Dribbble from './Icons/Social/Dribbble'
import Facebook from './Icons/Social/Facebook'
import Google from './Icons/Social/Google'
import Instagram from './Icons/Social/Instagram'
import LinkedIn from './Icons/Social/LinkedIn'
import Pinterest from './Icons/Social/Pinterest'
import Reddit from './Icons/Social/Reddit'
import Snapchat from './Icons/Social/Snapchat'
import Twitter from './Icons/Social/Twitter'
import Youtube from './Icons/Social/Youtube'

// Types
interface Props extends IconProps {
  name: string
}

export enum IconActionSize {
  Small = 16,
  Medium = 20,
  Large = 24
}

export enum IconSocialSize {
  Small = 20,
  Medium = 32,
  Large = 48
}

const iconElements = (props?: React.PropsWithChildren<IconProps>) => ({
  'checkmark': <Checkmark {...props} />,
  'chevron': <Chevron {...props} />,
  'close': <Close {...props} />,
  'external-link': <ExternalLink {...props} />,
  'minus': <Minus {...props} />,
  'placeholder': <Placeholder {...props} />,
  'plus': <Plus {...props} />,
  'triangle': <Triangle {...props} />,
  'warning': <Warning {...props} />,
  'apple': <Apple {...props} />,
  'dribbble': <Dribbble {...props} />,
  'facebook': <Facebook {...props} />,
  'google': <Google {...props} />,
  'instagram': <Instagram {...props} />,
  'linkedin': <LinkedIn {...props} />,
  'pinterest': <Pinterest {...props} />,
  'reddit': <Reddit {...props} />,
  'snapchat': <Snapchat {...props} />,
  'twitter': <Twitter {...props} />,
  'youtube': <Youtube {...props} />,
})// Add Icon Above

const Icon: React.FC<Props> = ({ name, ...props }) => (
  <>
    {iconElements(props)[name]}
  </>
)

export const icons = Object.keys(iconElements())

export default Icon
