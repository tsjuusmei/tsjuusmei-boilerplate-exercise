import * as React from 'react'

// Types
import type { IconProps } from '../../types'

// Enums
import { IconSocialSize } from '../../index'

function Dribbble({
  color = 'var(--color3-500)',
  size = IconSocialSize.Small
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.47939 0 0 4.47939 0 10C0 15.5206 4.47939 20 10 20C15.5098 20 20 15.5206 20 10C20 4.47939 15.5098 0 10 0ZM16.6052 4.60954C17.7983 6.06291 18.5141 7.91756 18.5358 9.92406C18.2538 9.86987 15.4338 9.295 12.5922 9.65294C12.5271 9.51194 12.4729 9.36006 12.4078 9.20825C12.2343 8.79613 12.0391 8.37313 11.8438 7.97181C14.9891 6.692 16.4208 4.84816 16.6052 4.60954ZM10 1.47506C12.1692 1.47506 14.154 2.28851 15.6616 3.62256C15.5097 3.83948 14.2191 5.56399 11.1822 6.70281C9.78306 4.13232 8.23213 2.0282 7.9935 1.70282C8.63338 1.55097 9.30587 1.47506 10 1.47506ZM6.36662 2.27766C6.59437 2.58134 8.11281 4.69631 9.53363 7.21256C5.5423 8.2755 2.01736 8.25381 1.63774 8.25381C2.19089 5.60738 3.98047 3.40564 6.36662 2.27766ZM1.45336 10.0109C1.45336 9.92406 1.45336 9.83731 1.45336 9.75056C1.82213 9.76137 5.96529 9.81563 10.2278 8.53581C10.4773 9.013 10.705 9.50106 10.9219 9.98913C10.8134 10.0217 10.6941 10.0542 10.5857 10.0868C6.18221 11.5076 3.83948 15.3904 3.64425 15.7158C2.2885 14.2083 1.45336 12.2018 1.45336 10.0109ZM10 18.5466C8.026 18.5466 6.20391 17.8742 4.76139 16.7462C4.91323 16.4317 6.64856 13.0911 11.4642 11.41C11.4859 11.3991 11.4968 11.3991 11.5184 11.3883C12.7223 14.5011 13.2104 17.1149 13.3406 17.8633C12.3102 18.308 11.1822 18.5466 10 18.5466ZM14.7614 17.0824C14.6746 16.5618 14.2191 14.0673 13.1019 10.9978C15.7809 10.5748 18.1236 11.269 18.4165 11.3666C18.0478 13.7419 16.6811 15.7917 14.7614 17.0824Z"
        fill={color}
      />
    </svg>
  )
}

export default React.memo(Dribbble)
