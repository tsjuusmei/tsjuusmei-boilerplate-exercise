import * as React from 'react'

// Types
import {
  IconProps, IconSize
} from '@/components/atoms/Icon/types'

function Google({
  color = 'var(--color3-500)',
  size = IconSize.Small,
  className
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7 6.0091C12.7522 5.10522 11.4875 4.6128 10.1788 4.63303C7.78422 4.63303 5.75048 6.24855 5.02534 8.42394V8.42399C4.64085 9.56397 4.64085 10.7984 5.02534 11.9384H5.0287C5.75721 14.1104 7.78759 15.7259 10.1822 15.7259C11.4183 15.7259 12.4795 15.4097 13.302 14.8513V14.849C14.27 14.2082 14.931 13.1998 15.1368 12.0598H10.1789V8.52518H18.8366C18.9446 9.13902 18.9952 9.76634 18.9952 10.3903C18.9952 13.1821 17.9974 15.5424 16.2614 17.1411L16.2632 17.1425C14.7421 18.5455 12.6544 19.3583 10.1788 19.3583C6.70832 19.3583 3.53459 17.4022 1.97639 14.3026V14.3026C0.674533 11.709 0.674536 8.65333 1.9764 6.05972H1.97642L1.97639 6.05969C3.53459 2.95679 6.70832 1.00062 10.1788 1.00062C12.4588 0.973637 14.6612 1.83031 16.3206 3.3885L13.7 6.0091Z"
        fill={color}
      />
    </svg>
  )
}

export default React.memo(Google)
