import * as React from 'react'

// Types
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
import YouTube from './Icons/Social/Youtube'

export const iconComponents = {
  'checkmark': Checkmark,
  'chevron': Chevron,
  'close': Close,
  'external-link': ExternalLink,
  'minus': Minus,
  'placeholder': Placeholder,
  'plus': Plus,
  'triangle': Triangle,
  'warning': Warning,
  'apple': Apple,
  'dribbble': Dribbble,
  'facebook': Facebook,
  'google': Google,
  'instagram': Instagram,
  'linkedin': LinkedIn,
  'pinterest': Pinterest,
  'reddit': Reddit,
  'snapchat': Snapchat,
  'twitter': Twitter,
  'youtube': YouTube,
}


export type IconName = keyof typeof iconComponents;

export const iconElements = (props?: React.PropsWithChildren<IconProps>) => Object.entries(iconComponents).reduce(
  (previous, [name, Component]) => {
    return {
      ...previous,
      [name]: <Component {...props} />,
    }
  },
  {} as Record<IconName, JSX.Element>
)

interface Props extends IconProps {
  name: IconName;
}

const Icon: React.FC<Props> = ({ name, ...props }) => (
  <>
    {iconElements(props)[name]}
  </>
)

export default Icon
