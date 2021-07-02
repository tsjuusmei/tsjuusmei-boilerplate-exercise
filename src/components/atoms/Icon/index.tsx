import * as React from 'react'

// Types
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

// Types
interface Props extends IconProps {
  name: IconName
}

export const iconComponents = {
  'placeholder': Placeholder,
  'checkmark': Checkmark,
  'triangle': Triangle,
  'chevron': Chevron,
  'external-link': ExternalLink,
  'minus': Minus,
  'plus': Plus,
  'warning': Warning,
  'close': Close,
  'facebook': Facebook,
  'twitter': Twitter,
  'instagram': Instagram,
  'google': Google,
  'youtube': Youtube,
  'snapchat': Snapchat,
  'apple': Apple,
  'pinterest': Pinterest,
  'linkedin': LinkedIn,
  'dribbble': Dribbble,
  'reddit': Reddit,
}

export type IconName = keyof typeof iconComponents;

export const iconElements = (props?: React.PropsWithChildren<IconProps>) => Object.entries(iconComponents).reduce(
  (previous, [name, Component]) => {
    return {
      ...previous,
      [name]: <Component {...props} />,
    }
  },
  {} as Record<IconName, typeof Icon>
)

const Icon: React.FC<Props> = ({ name, ...props }) => (
  <>
    {iconElements(props)[name]}
  </>
)

export default Icon
